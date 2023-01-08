import { StyleSheet } from "react-native";
import { colors} from "../../constants/colors";
export default StyleSheet.create({
    defaultButton:{
        borderRadius: 7,
        backgroundColor:colors.primary,
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    defaultButtonText:{
        fontSize:14,
        color:colors.white,
        fontWeight:'bold'
    },
    activityIndicatorWrapper:{
        paddingLeft:10
    },
    buttonWrapper:{
        width:'100%',
        padding:20,
    },
    borderButtonCover:{
        borderWidth:0.5,
        borderColor:colors.primary,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:150,height:30,
        alignSelf:'center'
    }
});