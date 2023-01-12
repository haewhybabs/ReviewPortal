import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Image,StyleSheet,Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../components/Header';
import ButtonPage from '../../components/Button';
import database from '@react-native-firebase/database';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch,useSelector} from 'react-redux';
import SimpleToast from 'react-native-simple-toast';
import RNFS from 'react-native-fs';
const VenuePage = ({navigation}) => {
    const userInfo = useSelector(state => state.stateContent.userInfo);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [eventType,setEventType] = useState('');
    const [eventTypes,setEventTypes]=useState([])
    const [owners,setOwners]=useState([]);
    const [ownerSelected,setOwnerSelected] = useState(null);
    const [image, setImage] = useState([]);
    const reference = database().ref('/event_types');
    const venueReference = database().ref('/venues');
    const userReference = database().ref('/users');
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        reference.on('value', snapshot => {
            let values = snapshot.val();
            if(values){
                setEventTypes(Object.values(values));
            }
        });
        userReference.on('value',snapshot=>{
            let values = snapshot.val()
            let filteredData;
            let customizedUsers = [];
            if(values){
                filteredData = Object.values(values).filter(item=>item.role=='admin');
                filteredData.forEach((item,index)=>{
                    customizedUsers.push({
                        value:item.id,
                        label:`${item.name} ( ${item.email})`
                    })
                })
                setOwners(customizedUsers);
            }
        })


    },[])

    const saveImage = (image) => {
        // Define the path where the image will be saved with timestamp as the image name
        const imagePath = 'file://' + RNFS.DocumentDirectoryPath + '/image'+Date.now()+'.jpg';
    
        // Copy the image file from the specified path to the new location
        RNFS.copyFile(image.path, imagePath)
        .then(() => {
            // Update the state with the new image
            setImage(imagePath)
            console.log('Image saved to', imagePath);
        })
        .catch((err) => {
            console.log('Error saving image', err);
        });
    }
    
    
    
    
   
    
    
    

    const selectImage = () => {
        ImagePicker.openPicker({
        multiple: false
        }).then(image => {
            saveImage(image)
        });
    };

    const handleSubmit = ()=>{
        if(!name || !description || !location || !eventType || !image){
            return SimpleToast.show("All fields are required");
        }
        setLoading(true);
        const venueData = {
            name,
            description,
            location,
            eventType,
            ownerId:userInfo.role=='association'?ownerSelected:userInfo.id,
            image:image,
            rating:0,
            status:'pending'
        }
        let newVenue = venueReference.push();
        venueData.id = newVenue.key;
        newVenue.set(venueData);
        SimpleToast.show("Venue created successfully")
        setTimeout(()=>{
            navigation.push('Home');
            setLoading(false);
        },2000)
        
    }

    return (
    <View style={styles.container}>
        <Header title="Venue" handleBack={()=>{
            navigation.goBack();
        }} />
        <View style={{padding:20}}>
            <Text style={styles.label}>Event Name</Text>
            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                style={styles.input}
                numberOfLines={4}
            />

            <Text style={styles.label}>Location</Text>
            <TextInput
                value={location}
                onChangeText={text => setLocation(text)}
                style={styles.input}
                numberOfLines={4}
            />
            <Text style={styles.label}>Event type</Text>
            <View style={styles.input}>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={value => setEventType(value)}
                    placeholder={{ label: "Select event type", value: null }}
                    items={eventTypes}
                />
                    
            </View>
            {
                userInfo.role=='association' &&((
                    <>
                        <Text style={styles.label}>Owners</Text>
                        <View style={styles.input}>
                            <RNPickerSelect
                                style={pickerSelectStyles}
                                onValueChange={value => setOwnerSelected(value)}
                                placeholder={{ label: "Select Venue owner", value: null }}
                                items={owners}
                            />
                                
                        </View>
                    </>
                ))
            }
                

            <View style={styles.imageContainer}>
                <Button title="Select Event Image" onPress={selectImage} />
                
                <Image key={image} source={{ uri: image }} style={styles.image} />
                
            </View>
            
        </View>
        <View style={{justifyContent:'flex-end',flex:1}}>
            <ButtonPage disabled={loading} loading={loading} style={styles.buttonWrapper} title={"Submit"} onPress={()=>{
                handleSubmit()
            }} />
        </View>
        
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    flex:1
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 5,
  },
  imageContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  buttonWrapper:{
    paddingVertical:15
  }
});

export default VenuePage;


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
    //   paddingVertical: 12,

      borderWidth: 0,
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
    //   paddingVertical: 8,
      borderWidth: 0,
      borderRadius: 20,
      color:'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });