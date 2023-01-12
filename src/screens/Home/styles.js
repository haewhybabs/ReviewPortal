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
    bottomWrapper:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingBottom:20,
        paddingRight:30,
        flex:1
    },
    bottomModal: {
        bottom: 0,
        justifyContent: 'flex-end',
    },
    modalWrapper:{
        backgroundColor:colors.white,
        borderRadius:10,
        // marginHorizontal:-20,
         // marginVertical:-20,
        padding:20,
        justifyContent:'center',
        alignItems:'center'
       

    },
    divider:{
        width:'100%',
        backgroundColor:colors.DEEP_GREY_04,
        height:1,
        marginVertical:10
    }
})