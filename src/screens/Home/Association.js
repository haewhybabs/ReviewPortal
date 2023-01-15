import { View, Text,StyleSheet,Image, TouchableOpacity,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Divider from '../../components/Divider'
import { colors } from '../../constants/colors'
import StarRating from 'react-native-star-rating-widget';
import Fontisto from 'react-native-vector-icons/Fontisto';
import database from '@react-native-firebase/database'
export default function Association({navigation,item,userInfo}) {
    const [rating,setRating] = useState(3.5)
    // const handleStatusUpdate = (item, status) => {
    //     const venuesRef = database().ref('venues').orderByChild('id').equalTo(item.id);
    //     venuesRef.once('value', (snapshot) => {
    //         snapshot.forEach(function(child) {
    //             child.ref.update({status});
    //         });
    //     });
       
    // }
    const handleStatusUpdate = (item, status) => {
        const childRef = database().ref('venues').child(item.id);
        childRef.once('value', (snapshot) => {
            if(snapshot.val().id === item.id){
                childRef.update({status});
            }
        });
    }

    const renderContent = ({item}) =>{
        return(
            <View>
                <Divider />
                <View style={styles.wrapper}>
                    
                    <Image source={{ uri: item.image }} style={styles.venueImage}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.bigText} numberOfLines={1}>{item.name}</Text>
                        <Text style={[styles.normalText,{marginTop:10}]} numberOfLines={1}>{item.location}</Text>
                        <Text style={styles.text_002}>status {item.status}</Text>
                        <View style={styles.wrapper}>
                            {
                                item.status=='pending'?
                                <>
                                    <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"approved")}>
                                        <Text style={styles.smallBtnText}>Publish</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.publishWrapper,{}]} onPress={()=>handleStatusUpdate(item,"declined")}>
                                        <Text style={styles.smallBtnText}>Decline</Text>
                                    </TouchableOpacity>
                                </>
                                :
                                item.status=='approved'?
                                <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"declined")}>
                                    <Text style={styles.smallBtnText}>UnPublish</Text>
                                </TouchableOpacity>
                                :
                                item.status=='declined'?
                                <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"approved")}>
                                    <Text style={styles.smallBtnText}>Publish</Text>
                                </TouchableOpacity>
                                :null

                            }
                            
                        </View>
                        
                        {/* <Fontisto name="comment" /> */}
                        <Text style={{marginTop:20,color:colors.primary}} onPress={()=>navigation.navigate('Comments',{item})}>View reviews</Text>
                    </View>        
                </View>
            </View>
        )
    }
  return (
    
    <View>
        <Divider />
        <View style={styles.wrapper}>
            
            <Image source={{ uri: item.image }} style={styles.venueImage}/>
            <View style={{marginLeft:10}}>
                <Text style={styles.bigText} numberOfLines={1}>{item.name}</Text>
                <Text style={[styles.normalText,{marginTop:10}]} numberOfLines={1}>{item.location}</Text>
                <Text style={styles.text_002}>status {item.status}</Text>
                <View style={styles.wrapper}>
                    {
                        item.status=='pending'?
                        <>
                            <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"approved")}>
                                <Text style={styles.smallBtnText}>Publish</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.publishWrapper,{}]} onPress={()=>handleStatusUpdate(item,"declined")}>
                                <Text style={styles.smallBtnText}>Decline</Text>
                            </TouchableOpacity>
                        </>
                        :
                        item.status=='approved'?
                        <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"declined")}>
                            <Text style={styles.smallBtnText}>UnPublish</Text>
                        </TouchableOpacity>
                        :
                        item.status=='declined'?
                        <TouchableOpacity style={styles.publishWrapper} onPress={()=>handleStatusUpdate(item,"approved")}>
                            <Text style={styles.smallBtnText}>Publish</Text>
                        </TouchableOpacity>
                        :null

                    }
                    
                </View>
                
                {/* <Fontisto name="comment" /> */}
                <Text style={{marginTop:20,color:colors.primary}} onPress={()=>navigation.navigate('Comments',{item})}>View reviews</Text>
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