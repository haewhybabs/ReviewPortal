import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../constants/colors';
export default function Header({ title, navigation, handleBack,noBack
}) {
  return (
    <SafeAreaView>
        <View style={{ padding: 20 }}>
            <View style={styles.container}>
                {
                    noBack?<View/>:
                    <MaterialCommunity name="chevron-left" size={35} color={colors.darkGrey} onPress={handleBack}/>

                }
                
                <Text style={styles.textStyle}>{title}</Text>
                <View />
            </View>
        </View>
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 19,
  },
});