import { View, Text,Image,StyleSheet,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Divider from '../../components/Divider'
import { colors } from '../../constants/colors'
import StarRating from 'react-native-star-rating-widget';

export default function Reviewer({navigation,item,userInfo}) {
  return (
    <View>
        <Divider />
        <View style={styles.wrapper}>
            <Image  source={{ uri: item.image }} style={styles.venueImage}/>
            <View style={{marginLeft:10}}>
                <Text style={styles.bigText} numberOfLines={1}>{item.name}</Text>
                <Text style={[styles.normalText,{marginTop:5}]} numberOfLines={1}>{item.location}</Text>
                {
                    userInfo.role=='admin'?
                    <Text style={[styles.normalText,{marginTop:5,fontSize:10}]} numberOfLines={1}>status: {item.status}</Text>
                    :null
                }
                {/*  */}
                <View style={{marginTop:10}}>
                    <StarRating
                        rating={item.rating}
                        onChange={()=>null}
                        maxStars={5}
                        color={colors.primary}
                        
                    />
                </View>
                {/* <Fontisto name="comment" /> */}
                <Text style={{marginTop:20,color:colors.primary}} onPress={()=>navigation.navigate('Comments',{item})}>{userInfo.role=='admin'?'View reviews':'Drop a review'}</Text>
            </View>
            {/* <View style={{marginLeft:-10}}>
                <Fontisto name="heart-alt" size={22} />
            </View> */}
        </View>
    </View>
  )
}
const styles= StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        // justifyContent: 'space-between',
    },
    flexRow:{
        flexDirection:'row'
    },
    venueImage:{
        height:140,
        width:120,
        // resizeMode:"contain"
    },
    bigText:{
        fontWeight:'bold',
        fontSize:17
    },
    normalText:{
        color:colors.DEEP_GREY_05,
        fontSize:13
    }
})