import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 48,
    },
    logo: {
        height: 48,
        // width: 48,
        // marginRight: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        padding: 8,
    },
    button: {
        marginTop: 8,
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 4,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    registerText: {
        marginTop: 8,
        color: colors.primary,
    },
   
    inputSelect:{
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8,
      padding: 8,
    }
  });
  