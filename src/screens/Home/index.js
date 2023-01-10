import { View, Text, TouchableOpacity } from 'react-native'
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

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.stateContent.userInfo);
  const [search,setSearch]=useState("")
  const [showOption,setShowOption]=useState(false);
  const [loading,SetLoading]=useState(true);
  const [venues,setVenues] = useState([]);
  const reference = database().ref('/venues')

  useEffect(()=>{
    reference.on('value', snapshot => {
        let values = snapshot.val();
        if(values){
            setVenues(Object.values(values));
        }
    });
},[])

const filteredData = venues.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()) || item.location.includes(search.toLowerCase()) || item.description.includes(search.toLowerCase()))

  const renderDashboard = ()=>{
    if(userInfo.role=='user'){
      return (
        <Reviewer  navigation={navigation} venues={filteredData}/>
      )
    }
    if(userInfo.role=='association'){
      return(
        <Association navigation={navigation} />
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header title={userInfo.role=='association'?'All Venues': userInfo.role=='admin'?'My Venues':'Venues'} noBack/>

      <View style={styles.searchWrapper}>
        <SimpleSearch
          value={search}
          wrapperStyle={styles.searchInputWrapper}
          onChangeText={val => setSearch(val)}
          placeholderStyle={styles.searchPlaceholderStyle}
        />
        {
          renderDashboard()
        }
      </View>
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