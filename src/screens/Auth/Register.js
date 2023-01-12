
import React, { useState,useRef,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import SimpleToast from 'react-native-simple-toast';
import database from '@react-native-firebase/database';
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from '../../store/actions';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [loading,setLoading]=useState(false);
  const [users,setUsers]=useState([]);
  const reference = database().ref('/users');

  useEffect(()=>{
    reference.on('value', snapshot => {
      let values = snapshot.val();
      if(values){
        setUsers(Object.values(snapshot.val()))    
      }
    });
    // return () => database().ref('/users').off('value', reference);

  },[])

  

  const handleSubmit = ()=>{
    if(!name || !email || !password || !confirmPassword || !userType){
      return SimpleToast.show("All the fields are required");
    }
    if(password !=confirmPassword){
      return SimpleToast.show("Password does not match");
    }
    setLoading(true);
    let userData = {
      name,
      email,
      password,
      role:userType,
    } 
    let checkUser = users.filter(item=>item.email.toLowerCase()==email.toLowerCase())  
    if(checkUser.length){
      setLoading(false);
      return SimpleToast.show('user already exist');
    }
    let newUser = reference.push();
    userData.id = newUser.key;
    newUser.set(userData)
    dispatch({type:Actions.userInfo,payload:userData})
    setLoading(false);
    navigation.navigate('AppStack')
  }

  return (
    <View style={styles.wrapper}>
      <Header handleBack={()=>navigation.goBack()}/>
      <View style={{alignItems:'center',flex:1}}>
        <View style={styles.header}>
          {/* <Image  source = {require('../../assets/images/ReviewPortal.png')} style={styles.logo} /> */}
          <Text style={styles.headerText}>Registration Form</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
        <View style={styles.inputSelect}>
          <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={value => setUserType(value)}
              placeholder={{ label: "Select type", value: null }}
              items={[
              { label: 'Reviewer', value: 'user' },
              { label: 'Organization', value: 'admin' },
              ]}
          />
        </View>
       
      </View>
      <Button 
        title="Sign up" 
        style={styles.button}
        loading={loading}
        disabled={loading}
        onPress={handleSubmit}
        />
    </View>
  );
};


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 20,
    color:'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Register;