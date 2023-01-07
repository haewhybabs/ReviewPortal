import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {background, dotColor, pink, primaryColor, purple, success, textColor, textColor1, textColor2, textColor3, textPurple, white} from '../../constants/colors'
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
        backgroundColor:purple,
        height:ios?150:80,
        // justifyContent:'center'
        
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingTop:ios?80:10
    },
    optionText:{
        color:white,
    },
    headerIconCover:{
        bottom:30,
        // padding:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:0,
    },
    contentWrapper:{
        backgroundColor:white,
    },
    smallHeaderCard:{
        width:65,
        height:65,
        borderRadius:65/2,
        justifyContent:'center',
        alignItems:'center'
    },
    headerDate:{
        color:textColor1,
        paddingTop:20
    },
    headerText:{
        color:textPurple,
        fontSize:22,
        paddingTop:15
    },
    contentItemWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    contentContainer:{
        flexDirection:'row',
    },
    contentText:{
        paddingLeft:15,
        fontSize:15,
        color:primaryColor
    },
    arrowContainer:{
        paddingTop:5
    },
    headerDivider:{
        opacity:0.4,
        marginTop:15,
        marginBottom:15
    },
    headerPadding:{
        marginTop:30
    },
    pageTextHeader:{
        padding:20,
        fontSize:15,
        color:textColor1
    },
    pageContentHeader:{
        padding:20,
        fontSize:22,
        color:primaryColor
    },
    subContentWrapper:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5
    },
    amountText:{
        color:primaryColor,
        fontSize:16
    },
    paddingAlign:{
        marginBottom:0
    },
    bottomWrapper:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:40
    },
    bottomTextHeader:{
        color:primaryColor,
        fontSize:15
    },
    bottomText:{
        fontSize:12,
        color:textColor1,
        paddingTop:5
    }
})