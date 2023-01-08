import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';
// const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF'
       
    },
    mainContainer:{
        flex:1,
        
    },
    searchWrapper:{
        padding:20,
        paddingTop:0
    },
    searchInputWrapper: {
        backgroundColor: colors.LIGHT_GREY_06,
        height: 44,
        borderRadius: 10,
    },
})