import React from 'react'
import { View, Text } from 'react-native'
import { textColor, white } from '../../constants/colors'

export const Dotted = ()=>{
    return(
      <View
            style={{
              borderStyle: 'dotted',
              borderWidth: 0.8,
              borderRadius: 0.8,
              borderColor:'#BEBEBE'
            }}
          />
    )
  }
  

