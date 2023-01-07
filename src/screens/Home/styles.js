import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {background, primaryColor, textColor, textColor1, white} from '../../constants/colors'
import {ios} from '../../constants/device'
import { width } from '../../constants/dimensions';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:background,
    },
    mainContainer:{
        flex:1,
        backgroundColor:primaryColor,
    },
    headerWrapper:{
        width:width,
        backgroundColor:primaryColor,
        height:ios?250:250,
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 150,
        borderBottomEndRadius :150,
        overflow:'hidden'
    },
    headerChildren:{
        flex : 1,
        transform : [ { scaleX : 0.5 } ],
    },
    userImageWrapper:{
        height:36,
        width:36,
        borderRadius:36/2
    },
    
    headerContentWrapper:{
        padding:20,
        marginTop:ios?30:-20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textHeaderContainer:{
        padding:20,
        paddingTop:ios?0:10
    },
    dateText:{
        color:textColor1,
        fontSize:16,
        fontFamily:'Gilroy',
        paddingBottom:5
    },
    welcomeText:{
        fontSize:26,
        color:white,
        paddingBottom:5,
    },
    nameText:{
        color:white,
        fontSize:25
    },
    cardWrapper:{
        alignItems:'center',
        bottom:50
    },
    cardCover:{
        width:width-10,
        height:130,
        marginTop:-30,
        marginBottom:60
    },
    cardContent:{
        padding:10,
        paddingLeft:'25%'
    },
    cardTextWrapper:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    cardHeaderText:{
        color:white,
        paddingTop:5,
        fontSize:15,
        // fontWeight:'bold'
    },
    cardText:{
        color:white,
        fontSize:12
    },
    closeCover:{
        justifyContent:'center',
        paddingLeft:5,
        paddingTop:10
    },
    header:{
        width:width,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:primaryColor
    },
    headerText:{
        color:white,
        fontSize:18,
    }
})