import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Divider from '../../components/Divider'
import { colors } from '../../constants/colors'
import StarRating from 'react-native-star-rating-widget';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Association({navigation}) {
    const [rating,setRating] = useState(3.5)
  return (
    <View>
        <View>
            <Divider />
            <View style={styles.wrapper}>
                
                <Image source={require('../../assets/images/hotel2.png')} style={styles.venueImage}/>
                <View style={{marginLeft:10}}>
                    <Text style={styles.bigText} numberOfLines={1}>Bally Las Vegas</Text>
                    <Text style={[styles.normalText,{marginTop:10}]} numberOfLines={1}>Hanley Center Iroto</Text>
                    <Text style={styles.text_002}>status:Pending</Text>
                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.publishWrapper}>
                            <Text style={styles.smallBtnText}>Publish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.publishWrapper,{}]}>
                            <Text style={styles.smallBtnText}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* <Fontisto name="comment" /> */}
                    <Text style={{marginTop:20,color:colors.primary}} onPress={()=>navigation.navigate('Comments')}>View reviews</Text>
                </View>        
            </View>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        // justifyContent: 'space-between',
    },
   
    venueImage:{
        height:150,
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
    },
    publishWrapper:{
        padding:10,
        backgroundColor:colors.primary,
        borderRadius:6,
        marginRight:7,
        marginTop:8
    },
    text_002:{
        marginTop:5,
        color:colors.DEEP_GREY_01
    },
    smallBtnText:{color:colors.white,fontSize:12}
})