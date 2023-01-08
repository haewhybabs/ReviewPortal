
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('reviewer');

  return (
    <View style={styles.wrapper}>
      <Header handleBack={()=>navigation.goBack()}/>
      <View style={{alignItems:'center'}}>
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
              { label: 'Reviewer', value: 'reviewer' },
              { label: 'Organization', value: 'organization' },
              ]}
          />
        </View>
        <Button title="Sign up" style={styles.button}/>
      </View>

      
      
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