import { View, Text, TouchableOpacity, ScrollView,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Header from '../../components/Header';
import SimpleSearch from '../../components/Search';
import styles from './styles';
import Reviewer from './Reviewer';
import Association from './Association';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/colors';
import Modal from 'react-native-modal';
import Divider from '../../components/Divider';
import * as Actions from '../../store/actions';
import database from '@react-native-firebase/database'
import Loader from '../../components/Loader';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.stateContent.userInfo);
  const [search,setSearch]=useState("")
  const [showOption,setShowOption]=useState(false);
  const [loading,setLoading]=useState(true);
  const [venues,setVenues] = useState([]);
  const reference = database().ref('/venues')

  useEffect(()=>{
    if(userInfo.role=='user'){
      reference
      .orderByChild('status')
      .equalTo("approved")
      .once('value')
      .then(snapshot => {
          const values = snapshot.val();
          if(values){
            setVenues(Object.values(values));
          }
          setLoading(false)
      });
      
    }
    if(userInfo.role=='admin'){
      reference
      .orderByChild('ownerId')
      .equalTo(userInfo.id)
      .once('value')
      .then(snapshot => {
          const values = snapshot.val();
          if(values){
            setVenues(Object.values(values));
          }
          setLoading(false)
      });
    }
    if(userInfo.role=='association'){
      reference.on('value', snapshot => {
        let values = snapshot.val();
        if(values){
            setVenues(Object.values(values));
        }
        setLoading(false)
      });
    }
},[])

const filteredData = venues.filter(item=>item?.name.toLowerCase().includes(search.toLowerCase()) || item?.location.includes(search.toLowerCase()) || item?.description.includes(search.toLowerCase()))

  const renderDashboard = (item)=>{
    if(userInfo.role=='user' || userInfo.role=='admin'){
      return (
        <Reviewer  navigation={navigation} item={item} userInfo={userInfo}/>
      )
    }
    if(userInfo.role=='association'){
      return(
        <Association navigation={navigation} item={item} userInfo={userInfo}/>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header title={userInfo.role=='association'?'All Venues': userInfo.role=='admin'?'My Venues':'Venues'} noBack/>
      <View style={[styles.searchWrapper,{paddingBottom:0}]}>
        <SimpleSearch
          value={search}
          wrapperStyle={styles.searchInputWrapper}
          onChangeText={val => setSearch(val)}
          placeholderStyle={styles.searchPlaceholderStyle}
        />
      </View>
      <ScrollView>
        <View style={[styles.searchWrapper]}>
          {
            loading?<Loader />:null
          }
          <View>
            {
              filteredData.map((item,index)=>(
                <View key={index}>
                  {
                    renderDashboard(item)
                  }
                </View>
              ))
            }
            
          </View>
          
        </View>
      </ScrollView>
      <View style={styles.bottomWrapper}>
          <MaterialCommunityIcon name="plus-circle" size={50} color={colors.primary} onPress={()=>setShowOption(true)}/>
        </View>
      <Modal isVisible={showOption} style={styles.bottomModal} onBackdropPress={()=>setShowOption(false)}>
        <View style={styles.modalWrapper}>
          {
            userInfo.role =='user'?null:
            <>
              <TouchableOpacity onPress={()=>{
                setShowOption(false);
                navigation.push("Venue")
                }}>
                <Text>Add new venue</Text>
              </TouchableOpacity>
              <View style={styles.divider}/>
            </>

          }
          
          <TouchableOpacity onPress={()=>{
            setShowOption(false)
            dispatch({type:Actions.userInfo,payload:{}})
            navigation.navigate("Login")
          }}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}