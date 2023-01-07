import { ios } from "./device";
import AndroidCurrencyFormatter from 'react-native-android-currency-formatter';

export const getDateDetails = () =>{
    let date = new Date()
    let day = date.getDate();
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let weekday = weekdays[date.getDay()];
    return {
        day,month,weekday
    }
}

export const formatMoney=(number,usd) =>{

    if(usd==='USD'){
        if(ios){
            return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }else{
            return AndroidCurrencyFormatter.numberFormat(number, 'USD', 'en', 'US');
        }

    }
    if(ios){
        return number.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
    }
    else{
        return AndroidCurrencyFormatter.numberFormat(number, 'NGN', 'en', 'NG');
    }
  }