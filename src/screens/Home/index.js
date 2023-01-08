import { View, Text } from 'react-native'
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import Header from '../../components/Header';
import SimpleSearch from '../../components/Search';
import styles from './styles';
import Reviewer from './Reviewer';

export default function Home() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.stateContent.userInfo);
  const [search,setSearch]=useState("")

  const renderDashboard = ()=>{
    if(userInfo.role=='user'){
      return (
        <Reviewer />
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Home" noBack/>

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
    </View>
  )
}