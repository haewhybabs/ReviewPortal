import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import {borderColor, fadePink, primaryColor, shadowColor, textColor, textColor1, textColor2, textPurple, white} from '../../constants/colors'
import { width } from '../../constants/dimensions';
export default StyleSheet.create({
   cardCover:{
    width:width-40,
    paddingHorizontal: 18,
    elevation: 1,
    backgroundColor: white,
    shadowColor:'gray',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0.5 },
    shadowRadius: 10,
    borderRadius:7,
    height:100,
    padding:10,
    marginBottom:20
   },
   headerText:{
    color:textColor2,
    paddingBottom:7,
    fontSize:16
   },
   subText:{
      color:textColor1,
      fontSize:13
   },
   amountText:{
      color:textPurple,
      fontSize:26,
      fontFamily:'LucidaGrande',
      paddingTop:5
   },
   cardContentWrapper:{
      flexDirection:'row',
      justifyContent:'space-between'
   },
   iconWrapper:{
      height:40,
      width:40,
      borderRadius:40/2,
      backgroundColor:fadePink,
      justifyContent:'center',
      alignItems:'center'
   },
   circleSmallCard:{
      height:50,
      width:50,
      borderRadius:50/2,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:borderColor
   },

   circleCard:{
      height:70,
      width:70,
      borderRadius:70/2,
      justifyContent:'center',
      alignItems:'center',
   },
   defaultCard:{
      width:width-40,
      paddingHorizontal: 18,
      elevation: 1,
      backgroundColor: white,
      shadowColor:'gray',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 0.5 },
      shadowRadius: 10,
      borderRadius:7,
      height:100,
      padding:10,
   },
   input:{
      borderRadius:8,
      borderWidth:1,
      height:30,
      width:50,
      borderColor:borderColor,
      paddingLeft:10
  },
})