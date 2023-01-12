import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet,ImageBackground, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import database from '@react-native-firebase/database'
import {useDispatch,useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import { colors } from '../../constants/colors';
import { width } from '../../constants/dimensions';

const ReviewPage = ({navigation,route}) => {
    const {item} =route.params;
    const [comments,setComments] = useState([])
    const [replyModal,setReplyModal] =useState(false);
    const [commentResponse,setCommentResponse]= useState("");
    const commentsRef = database().ref('/comments');
    const [commentToReply,setCommentToReply] = useState(null);
    const venueId = item.id;
    const userInfo = useSelector(state => state.stateContent.userInfo);
    useEffect(() => {
      let commentListener = commentsRef
      .orderByChild('venue_id')
      .equalTo(venueId)
      .on('child_added', (snapshot) => {
          const newComment = snapshot.val();
          setComments((prevComments) => [...prevComments, newComment]);
      });
      return () => {
          commentsRef.off('child_added', commentListener);
      }
  }, []);
    

    
    // const [comments, setComments] = useState([
    //     { id: 1, text: 'Great hotel!', username: 'user1', date: 'Jan 1, 2020', rating: 5 },
    //     { id: 2, text: 'The rooms were clean and the staff was friendly.', username: 'user2', date: 'Jan 2, 2020', rating: 4 },
    // ]);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const renderResponse =(responses) =>{
      let items = Object.values(responses);
      for(let i =0; i<items.length; i++){
        console.log('ds',items[i])
        return(
          <Text>{items[i].response}</Text>
        )
      }
      
    }


    const handleSubmit = ()=>{
        let timestamp = Date.now();
        let commentData = {
            rating:rating,
            comment,
            venue_id:venueId,
            created_at: String (new Date(timestamp)),
            userInfo:{
                id:userInfo.id,
                name:userInfo.name,
                email:userInfo.email
            }
        }
        let newComment = commentsRef.push();
        commentData.id = newComment.key;
        newComment.set(commentData);
        setComment('');
        setRating(0);
    }
    const handleSubmitResponse = async() =>{
      let timestamp = Date.now();
      let responseData = {
        commentId:commentToReply.id,
        userInfo:userInfo,
        response:commentResponse,
        created_at: String (new Date(timestamp)),
      }
      const responseRef = database().ref('/comments/'+commentToReply.id+'/response');
      let newResponse = responseRef.push()
      responseData.id = newResponse.key;
      newResponse.set(responseData);
      setCommentResponse("");
      // setReplyModal(false);

      const updatedComment = await responseRef.once('value');
    setCommentToReply({...commentToReply,response: updatedComment.val()});

    const updatedCommentsSnapshot = await commentsRef.orderByChild('venue_id')
                                                    .equalTo(venueId)
                                                    .once('value');
    //update the comments state with the updated comments
    setComments(Object.values(updatedCommentsSnapshot.val()));


    }

    const renderComment = ({ item }) => {
        return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{item.comment}</Text>
            <Text style={styles.commentMetadata} numberOfLines={1}>{item.userInfo.name} - {item.created_at.split('G')[0]}</Text>
            <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((i,key) => {
                return (
                <TouchableOpacity key={key} onPress={() => setRating(i)}>
                    <Text style={i <= item.rating ? styles.fullStar : styles.emptyStar}>★</Text>
                </TouchableOpacity>
                );
            })}

            <Text style={{marginLeft:10}} onPress={()=>{
              setCommentToReply(item)
              setReplyModal(true)}}> {userInfo.role=='admin'?'Reply':'View Reply'}</Text>
            </View>
        </View>
        );
    };

   

    return (
        <View style={styles.container}>
            <Header title="Review" handleBack={()=>navigation.goBack()}/>
            <ImageBackground source={{ uri: item.image }} style={styles.header}>
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            {/* <Text style={styles.username}>{'currentUser'}</Text> */}
            </ImageBackground>
            <View style={styles.itemWrapper}>
                <FlatList
                    data={comments}
                    renderItem={renderComment}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <TextInput
                    style={styles.commentInput}
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Enter your review"
                />
                <View style={styles.ratingContainer}>
                    {[1, 2, 3, 4, 5].map((i,key) => {
                    return (
                        <TouchableOpacity key={key} onPress={() => setRating(i)}>
                        <Text style={i <= rating ? styles.fullStar : styles.emptyStar}>★</Text>
                        </TouchableOpacity>
                    );
                    })}
                </View>
            </View>
            <Button 
                style={styles.submitButton}
                title="Post Comment"
                onPress={handleSubmit}
            />
             <Modal isVisible={replyModal} style={styles.bottomModal} onBackdropPress={()=>setReplyModal(false)}>
              <View style={styles.modalContainer}>
               
                <View style={{width:'100%'}}>
                  <ScrollView>
                    <View style={[styles.commentContainer]}>
                      <Text style={styles.commentText}>{commentToReply?.comment}</Text>
                      <Text style={styles.commentMetadata} numberOfLines={1}>{commentToReply?.userInfo.name} - {commentToReply?.created_at.split('G')[0]}</Text>
                      <View style={styles.ratingContainer}>
                      {[1, 2, 3, 4, 5].map((i,key) => {
                          return (
                          <TouchableOpacity key={key} onPress={() => setRating(i)}>
                              <Text style={i <= commentToReply?.rating ? styles.fullStar : styles.emptyStar}>★</Text>
                          </TouchableOpacity>
                          );
                      })}
                      </View>
                    </View>
                    {
                      commentToReply?.response?
                      Object.values(commentToReply?.response).map((value,index)=>(
                        <View style={{marginBottom:10,marginLeft:10}}>
                          <Text style={{fontWeight:'bold'}}>{item.name} - {value?.created_at.split('G')[0]}</Text>
                          <Text style={{marginTop:2}}> {value.response}</Text>
                        </View>
                      ))
                      :null

                    }

                    <View >
                      <Text >Reply Comment</Text>

                      <TextInput
                        style={[styles.commentInput,styles.bigInput]}
                        value={commentResponse}
                        onChangeText={setCommentResponse}
                        placeholder="Enter your response"
                      />
                      <Button title="Reply" style={styles.commentButton} onPress={handleSubmitResponse}/>
                    </View>
                  </ScrollView>
                </View>
                
                
              </View>
            </Modal>
        </View>
    );
};
export default ReviewPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   padding: 16,
    },
    itemWrapper:{
        padding:20,
        flex:1
    },
    header: {
      height: 200,
      justifyContent: 'flex-end',
      padding: 16,
    },
    hotelName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    location: {
      fontSize: 16,
      color: 'white',
    },
    username: {
      fontSize: 16,
      color: 'white',
    },
    commentContainer: {
      marginBottom: 16,
    },
    commentText: {
      fontSize: 16,
    },
    commentMetadata: {
      fontSize: 14,
      color: 'grey',
    },
    ratingContainer: {
      flexDirection: 'row',
      marginTop: 8,
    },
    fullStar: {
      color: 'orange',
    },
    emptyStar: {
      color: 'lightgrey',
    },
    commentInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 16,
      padding: 8,
    },
    submitButton: {
      padding: 12,
      borderRadius: 4,
      marginTop: -20,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    bottomModal: {
      bottom: 0,
      justifyContent: 'flex-end',
    },
    modalContainer:{
      backgroundColor:colors.white,
      borderRadius:10,
      padding:20,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:-20,
      marginBottom:-20,
    },
    bigInput:{
      // width:width-40,
      height:100
    },
    commentButton:{paddingTop:10,paddingBottom:10,width:width-40}

    
  });