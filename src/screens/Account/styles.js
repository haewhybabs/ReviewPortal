import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {background, dotColor, pink, primaryColor, success, textColor, textColor1, textColor2, textColor3, white} from '../../constants/colors'
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
        height:ios?200:150,
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 130,
        borderBottomEndRadius :130,
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
        marginTop:ios?40:-10,
        
    },
    headerText:{
        color:white,
        fontSize:18,
        textAlign:'center',
    },
    headerLeftText:{
        color:pink,
        bottom:120,
        paddingRight:10
    },
    subHeaderText:{
        color:textColor1,
        fontSize:13,
        textAlign:'center'
    },
    centerHeaderWrapper:{
        // alignItems:'center',
        // backgroundColor:'red',
        alignSelf:'center'
    },
    activeDotStyle:{
        backgroundColor:pink,
    },
    dotStyle:{
        backgroundColor:dotColor
    },
    amount:{
        color:white,
        paddingTop:20,
        fontSize:35,
        textAlign:'center',
    },
    sideContainer:{
        marginTop:-20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    arrowStyle:{
        bottom:120,
        paddingLeft:10
    },
    contentIconWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:40,
    },
    contentIconText:{
        textAlign:'center',
        color:textColor2,
        paddingTop:5
    },
    mainCard:{
        height:110,
        alignSelf:'center'
    },
    cardHeaderText:{
        color:pink,
        alignSelf:'center',
        fontSize:15
    },
    arrowRightCover:{
        alignItems:'flex-end',
        bottom:15
    },
    cardFooter:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    cardMoneyIn:{
        color:success,
        fontFamily:'LucidaGrande',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    cardMoneyOut:{
        color:textColor2,
        fontFamily:'LucidaGrande',
        fontSize:20,
        fontWeight:'bold'
    },
    moneyInText:{
        textAlign:'center',
        color:textColor1
    },
    dateText:{
        paddingLeft:20,
        color:textColor1
    },
    transactionCover:{
        marginTop:10,
        backgroundColor:white,
        flex:1,
        padding:10
    },
    transactionItem:{
        flexDirection:'row',
        padding:10
    },
    transactionHeaderText:{
        paddingLeft:20,
        fontSize:16
    },
    transactionText:{
        color:pink,
        paddingLeft:20,
        fontSize:13
    },
    transactionAmount:{
        paddingTop:15,
        paddingRight:10,
        fontSize:18,
        color:success,
    },
    transactionHeadItems:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    divider:{
        marginVertical:10,
        opacity:0.5
    }
   
})