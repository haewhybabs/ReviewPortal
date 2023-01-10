import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import database from '@react-native-firebase/database';
import { styles } from './styles';
import Button from '../../components/Button';
import SimpleToast from 'react-native-simple-toast';
import {useDispatch,useSelector} from 'react-redux';
import * as Actions from '../../store/actions';

const LoginForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users,setUsers]=useState([]);  
  const [loading,setLoading]=useState(false);
  const reference = database().ref('/users');
  useEffect(()=>{
    reference.on('value',snapshot=>{
      let values = snapshot.val();
      if(values){
        setUsers(Object.values(values));
      }
    })
  },[])
  const handleLogin=()=>{
    let user = users.filter(item=>item.email.toLowerCase()==username.toLocaleLowerCase() && item.password==password);
    if(user.length){
      user=user[0];
      dispatch({type:Actions.userInfo,payload:user})
      navigation.navigate('AppStack')
    }
    else{
      SimpleToast.show("Invalid username or Password")
    }
      
    
   


    
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image  source = {require('../../assets/images/ReviewPortal.png')} style={styles.logo} /> */}
        <Text style={styles.headerText}>Welcome Back</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
       <Button title="Log in" 
       style={styles.button} 
       onPress={handleLogin}
       loading={loading}
       disabled={loading}
       />
      <Text style={styles.registerText} onPress={() =>navigation.navigate('Register')}>
        Don't have an account? Click here to register.
      </Text>
    </View>
  );
};



export default LoginForm;