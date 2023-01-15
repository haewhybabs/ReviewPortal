import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View style={{alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
  )
}