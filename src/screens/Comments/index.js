import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import database from '@react-native-firebase/database'
import {useDispatch,useSelector} from 'react-redux';

const ReviewPage = ({navigation,route}) => {
    const {item} =route.params;
    const [comments,setComments] = useState([])
    const commentsRef = database().ref('/comments');
    const venueId = item.id;
    const userInfo = useSelector(state => state.stateContent.userInfo);
    

    useEffect(()=>{
        commentsRef
        .orderByChild('venue_id')
        .equalTo(venueId)
        .once('value')
        .then(snapshot => {
            const values = snapshot.val();
            if(values){
                setComments(Object.values(values));
            }
        });
    },[commentsRef])

    

    
    // const [comments, setComments] = useState([
    //     { id: 1, text: 'Great hotel!', username: 'user1', date: 'Jan 1, 2020', rating: 5 },
    //     { id: 2, text: 'The rooms were clean and the staff was friendly.', username: 'user2', date: 'Jan 2, 2020', rating: 4 },
    // ]);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit1 = () => {
        // Send the comment and rating to the server
        // and add the comment to the list of comments
        setComments([...comments, { id: comments.length + 1, text: comment, username: 'currentUser', date: 'Jan 3, 2020', rating }]);
        setComment('');
        setRating(0);
    };

    const handleSubmit = ()=>{
        let timestamp = Date.now();
        let commentData = {
            rating:rating,
            comment,
            venue_id:venueId,
            id: Math.random().toString(36).substr(2, 9),
            created_at: String (new Date(timestamp)),
            userInfo:{
                id:userInfo.id,
                name:userInfo.name,
                email:userInfo.email
            }

        }

        commentsRef.push(commentData);
        setComment('');
        setRating(0);
    }

    const renderComment = ({ item }) => {
        return (
        <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{item.comment}</Text>
            <Text style={styles.commentMetadata} numberOfLines={1}>{item.userInfo.name} - {item.created_at.split('G')[0]}</Text>
            <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map(i => {
                return (
                <TouchableOpacity onPress={() => setRating(i)}>
                    <Text style={i <= item.rating ? styles.fullStar : styles.emptyStar}>★</Text>
                </TouchableOpacity>
                );
            })}
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
                />
                <TextInput
                    style={styles.commentInput}
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Enter your review"
                />
                <View style={styles.ratingContainer}>
                    {[1, 2, 3, 4, 5].map(i => {
                    return (
                        <TouchableOpacity onPress={() => setRating(i)}>
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
  });