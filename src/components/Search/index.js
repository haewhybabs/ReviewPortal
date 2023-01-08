import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const SimpleSearch = ({
    value,
    onChangeText,
    wrapperStyle,
    inputStyle,
    placeholderStyle,
    onFocus,
  }) => {
    return (
      <View style={{ ...styles.container, ...wrapperStyle }}>
        <Feather name="search" style={styles.searchIcon} size={11} />
        <TextInput
          placeholder="Search"
          style={
            !value
              ? [styles.inputBar, inputStyle, placeholderStyle]
              : [styles.inputBar, inputStyle]
          }
          value={value}
          onChangeText={text => onChangeText(text)}
          onFocus={onFocus ?? ''}
        />
      </View>
    );
  };
  
  export default SimpleSearch;