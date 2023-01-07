import { View, Text,StatusBar,Pressable,FlatList, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { primaryColor, success, textColor1 } from '../../constants/colors'
import Texts from '../../components/Texts';
import styles from './styles'
import Path from '../../assets/svgs/Path.svg'
import Transfer from '../../assets/svgs/transfer.svg'
import UserPay from '../../assets/svgs/userPay.svg';
import UserRate from '../../assets/svgs/userRate.svg';
import Card from '../../assets/svgs/card.svg';
import ArrowRight from '../../assets/svgs/arrowRightPrimary.svg';
import Swiper from "react-native-swiper";
import { formatMoney, getDateDetails } from '../../constants/functions';
import { CircleBorderIcon, DefaultCard } from '../../components/Cards';
import Divider from '../../components/Divider';
import { transactionData } from '../../constants/data';
let date = getDateDetails();
export default function Account({navigation,route}) {
  const {item,cardItems} =route.params;
  let renderItems = [item]
  const otherItems = cardItems.filter((val)=>{
    if(val.id !=item.id){
      renderItems.push(val)
    }
  });
  const renderItem = ({item})=>{
    return(
      <TouchableOpacity onPress={()=>navigation.navigate('Transaction',{item})}>
        <View style={styles.transactionHeadItems}>
          <View style={styles.transactionItem}>
            {
              item.image?<Image source={item.icon}/>:<item.icon/>
            }
            <View style={styles.transactionTextItem}>
              <Texts bold style={styles.transactionHeaderText}>{item.name}</Texts>
              <Texts bold style={styles.transactionText}>{item.type}</Texts>
            </View>
          </View>
          <Texts bold style={{...styles.transactionAmount,color:item.debit?textColor1:success}}>{formatMoney(item.amount)}</Texts>
        </View>
        <Divider style={styles.divider}/>
      </TouchableOpacity>
    )
  }  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <View style={styles.headerChildren}>
          <Swiper
            // autoplay
            activeDotStyle={styles.activeDotStyle} 
            dotStyle={styles.dotStyle}
            removeClippedSubviews={false}
            style={styles.swiper} 
            // containerStyle={{ width: width }}
          >
            {
              renderItems.map((value,index)=>(
                <View key={index} style={styles.headerContentWrapper}>
                  <View style={styles.centerHeaderWrapper}>
                    <Texts bold style={styles.headerText}>{value.header}</Texts>
                    <Texts style={styles.subHeaderText}>{value.subText}</Texts>
                    <Texts bold style={styles.amount}>{formatMoney(value.amount)}</Texts>
                  </View>
                </View>
              ))
            }
          </Swiper>
          <View style={styles.sideContainer}>
              <Pressable onPress={()=>navigation.goBack()} style={styles.arrowStyle}>
                <Path />
              </Pressable>
              <Texts bold style={styles.headerLeftText}>Options</Texts>
          </View>
        </View>
      </View>
      <View style={styles.contentIconWrapper}>
        <View>
          <CircleBorderIcon 
          icon={<Transfer />}
          />
          <Texts bold style={styles.contentIconText}>Transfer</Texts>
        </View>
        
        <View>
          <CircleBorderIcon 
          icon={<UserPay />}
          />
          <Texts bold style={styles.contentIconText}>Pay</Texts>
        </View>
        <View>
          <CircleBorderIcon 
          icon={<Card />}
          />
          <Texts bold style={styles.contentIconText}>Card</Texts>
        </View>
      </View>
      <DefaultCard style={styles.mainCard}>
        <Texts bold style={styles.cardHeaderText}>Last 30 days</Texts>
        <View style={styles.arrowRightCover}>
          <ArrowRight />
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text bold style={styles.cardMoneyIn}>{formatMoney(5250)}</Text>
            <Texts bold style={styles.moneyInText}>Money In</Texts>
          </View>
          <UserRate />
          <View>
            <Text style={styles.cardMoneyOut}>{formatMoney(2250)}</Text>
            <Texts bold style={styles.moneyInText}>Money out</Texts>
          </View>
        </View>
      </DefaultCard>
      <Divider />
      <Texts bold style={styles.dateText}>{date.weekday.slice(0,3).toUpperCase()}, {date.day} {date.month.toUpperCase()}</Texts>
      <View style={styles.transactionCover}>
        <FlatList
          data={transactionData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </View>
  )
}