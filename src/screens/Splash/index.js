import { View, Image,StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import {white} from '../../constants/colors';
export default function Splash({navigation}) {
    const [mainSplash, setMainSplash] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setMainSplash(true);
        }, 3000);
        if(mainSplash){
            navigation.navigate('AppStack');
        }
    }, [mainSplash]);
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={white} barStyle="light-content" />
        <Image 
            source = {require('../../assets/images/prospa.png')}                         
            style={styles.logoCover}      
        />
    </View>
  )
}