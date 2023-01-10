import { View, Text,Image,StyleSheet,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Divider from '../../components/Divider'
import { colors } from '../../constants/colors'
import StarRating from 'react-native-star-rating-widget';
import Fontisto from 'react-native-vector-icons/Fontisto';
import database from '@react-native-firebase/database'

export default function Reviewer({navigation,venues}) {
    const renderContent = ({item}) =>{
        return(
            <View>
                <Divider />
                <View style={styles.wrapper}>
                    <Image  source={{ uri: item.image }} style={styles.venueImage}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.bigText} numberOfLines={1}>{item.name}</Text>
                        <Text style={[styles.normalText,{marginTop:5}]} numberOfLines={1}>{item.location}</Text>
                        {/* <Text style={[styles.normalText,{marginTop:5}]} numberOfLines={1}>{item.eventType}</Text> */}
                        <View style={{marginTop:10}}>
                            <StarRating
                                rating={item.rating}
                                onChange={()=>null}
                                maxStars={5}
                                color={colors.primary}
                                
                            />
                        </View>
                        {/* <Fontisto name="comment" /> */}
                        <Text style={{marginTop:20,color:colors.primary}} onPress={()=>navigation.navigate('Comments',{item})}>Drop a review</Text>
                    </View>
                    {/* <View style={{marginLeft:-10}}>
                        <Fontisto name="heart-alt" size={22} />
                    </View> */}
                </View>
            </View>
        )

    }
  return (
    <View>
        

        <FlatList
            data={venues}
            renderItem={renderContent}
            keyExtractor={item => item.id}
        />
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
        height:130,
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