import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {primaryColor, white} from '../../constants/colors'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:white,
        justifyContent:'center',
        alignItems:'center'
    },
    logoCover:{
        height:300,
        width:300,
        resizeMode:'contain'
    }
})