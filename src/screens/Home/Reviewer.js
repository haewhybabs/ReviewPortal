import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import Divider from '../../components/Divider'

export default function Reviewer() {
  return (
    <View>
        <Divider />
        <View style={styles.wrapper}>
            <View style={styles.flexRow}>
                <Image source={require('../../assets/images/hotel2.png')} style={styles.venueImage}/>
                <View>
                    <Text>Bally Las Vegas</Text>
                </View>
            </View>
        </View>
      <Text>Reviewer</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    flexRow:{
        flexDirection:'row'
    },
    venueImage:{
        height:150,
        width:120,
        // resizeMode:"contain"
    }
})