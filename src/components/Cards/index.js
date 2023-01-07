import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import styles from './styles';
import Texts from '../Texts';
import { formatMoney } from '../../constants/functions';  
export default function Card({header,subText,amount,leftIcon,leftIconBackground,onPress,accountTotal}) {
    let percentage =null;
    let account = parseFloat(amount);
    let totalAccount = parseFloat(accountTotal);
    if(header==='current'){
        console.log('a',amount)
        if(accountTotal===0){
            percentage = (amount/amount) * 100
        }
    }
    else{   
        if(accountTotal===0){
            percentage=0;
        }
        else{
            percentage = (amount/accountTotal) * 100
        }
        
    }
    
    
    const handlePercentageChange = ()=>{

    }
    return (
        <TouchableOpacity style={styles.cardCover} onPress={onPress}>
            <View style={styles.cardContentWrapper}>
                <View>
                    <Texts bold style={styles.headerText}>{header}</Texts>
                    {/* <Texts bold style={styles.subText}>{subText}</Texts> */}
                    <View>
                        <Text style={styles.amountText}>{formatMoney(amount)}</Text>
                        <TextInput 
                        style={styles.input} 
                        value={percentage.toString()} 
                        onChangeText={handlePercentageChange}
                        />
                    </View>
                    
                </View>
                <View style={{...styles.iconWrapper,backgroundColor:leftIconBackground}}>
                    {leftIcon}
                </View>
            </View>
        </TouchableOpacity>
    )
}
export function CircleBorderIcon({icon,style}){
    return(
        <View style={{...styles.circleSmallCard,...style}}>
            {icon}
        </View>
    )
}
export function CircleIcon({icon,style,background}){
    return(
        <View style={{...styles.circleCard,background,...style}}>
            {icon}
        </View>
    )
}
export function DefaultCard({children,style}){
    return(
        <View style={{...styles.defaultCard,...style}}>
            {children}
        </View>
    )
}