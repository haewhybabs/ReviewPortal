import React from 'react'
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import styles from './styles';
import { colors } from '../../constants/colors';
export default function Button({title,style,onPress,disabled,loading,TextStyle}) {
    const renderButtonContent = ()=>{
        return(
            <>
                <Text style={{...styles.defaultButtonText,...TextStyle}}>{title}</Text>
                {
                    loading&&((
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator color={colors.white} />
                        </View>
                    ))
                }
            </>
        )
    }
    return (
        <View style={styles.buttonWrapper}>
        {
            disabled?
            <View style={{...styles.defaultButton,...style,opacity: 0.6}} onPress={onPress}>
                {renderButtonContent()}
            </View>
            :
            <TouchableOpacity style={{...styles.defaultButton,...style}} onPress={onPress}>
                {renderButtonContent()}
            </TouchableOpacity>

        }
        </View>
    )
}