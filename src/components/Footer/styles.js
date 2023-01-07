import { StyleSheet} from 'react-native';
import {fadePink, pink, textColor, textColor1, white} from '../../constants/colors';
import { width } from '../../constants/dimensions';
export default StyleSheet.create({
    footer:{
        width:width,
        backgroundColor:white,
        height:90,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    footerContentCurrent:{
        alignItems:'center',
        marginTop:8,
        width:width/5-10
    },
    footerContent:{
        alignItems:'center',
        width:width/5-10
    },
    footerText:{
        color:pink,
        fontSize:11
    },
    footerText1:{
        marginTop:-20,
        fontSize:11,
        color:textColor1
    }
})