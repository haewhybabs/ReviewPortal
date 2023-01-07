import { View, Text,StatusBar,Pressable, ScrollView,Switch } from 'react-native'
import React from 'react'
import { purple, success, switchFalse, white } from '../../constants/colors';
import styles from './styles';
import Texts from '../../components/Texts';
import GoBackArrow from '../../assets/svgs/goBackArrow.svg'
import ArrowRight from '../../assets/svgs/arrowRight.svg'
import HeaderPhone from '../../assets/svgs/headerPhone.svg'
import { DefaultCard } from '../../components/Cards';
import Divider from '../../components/Divider';
import CurrentAccount from '../../assets/svgs/currentAccount.svg'
import Receipt from '../../assets/svgs/receipt.svg'
import TotalSpent from '../../assets/svgs/totalSpent.svg'
import MonthSpent from '../../assets/svgs/monthSpent.svg'
import AverageSpent from '../../assets/svgs/averageSpent.svg'
import { formatMoney } from '../../constants/functions';

export default function Transaction({navigation,route}) {
  const item = route.params.item;
  const [switchValue,setSwitchValue]=React.useState(false)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={purple} barStyle="light-content" />
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <Pressable onPress={()=>navigation.goBack()}>
            <GoBackArrow />
          </Pressable>
          <Texts bold style={styles.optionText}>Options</Texts>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headerIconCover}>
          <DefaultCard style={styles.smallHeaderCard}>
            <HeaderPhone />
          </DefaultCard>
          <Texts bold style={styles.headerDate}>5 JULY 2019 11:50am</Texts>
          <Texts bold style={styles.headerText}>{item.name}</Texts>
          <View style={styles.headerPadding}/>

          <View style={styles.contentItemWrapper}>
            <View style={styles.contentContainer}>
              <HeaderPhone width="20" height="20"/>
              <Texts bold style={styles.contentText}>Utility</Texts>
            </View>
            <View style={styles.arrowContainer}>
              <ArrowRight />
            </View>
           
          </View>
          <Divider style={styles.headerDivider}/>

          <View style={styles.contentItemWrapper}>
            <View style={styles.contentContainer}>
              <CurrentAccount width="20" height="20"/>
              <Texts bold style={styles.contentText}>Current Account</Texts>
            </View>
            <View style={styles.arrowContainer}>
              <ArrowRight />
            </View>
           
          </View>
          <Divider style={styles.headerDivider}/>

          <View style={styles.contentItemWrapper}>
            <View style={styles.contentContainer}>
              <Receipt  width="20" height="20" />
              <Texts bold style={styles.contentText}>Add a receipt</Texts>
            </View>
            <View style={styles.arrowContainer}>
              <ArrowRight />
            </View>
          </View>

        </View>
      </View>
      <ScrollView>
        <Texts bold style={styles.pageTextHeader}>USER HISTORY</Texts>
        <View style={styles.contentWrapper}>
          <Texts bold style={styles.pageContentHeader}>You and MTN</Texts>
            <View style={styles.subContentWrapper}>
              <View style={styles.contentItemWrapper}>
                <View style={styles.contentContainer}>
                  <TotalSpent/>
                  <Texts bold style={styles.contentText}>June total spent</Texts>
                </View>
                <Texts bold style={styles.amountText}>{formatMoney(650.12)}</Texts>
              </View>
              <Divider style={styles.headerDivider}/>
            </View>
            <View style={styles.subContentWrapper}>
              <View style={styles.contentItemWrapper}>
                <View style={styles.contentContainer}>
                  <MonthSpent/>
                  <Texts bold style={styles.contentText}>Transaction in July</Texts>
                </View>
                <Texts bold style={styles.amountText}>4</Texts>
              </View>
              <Divider style={styles.headerDivider}/>
            </View>
            <View style={styles.subContentWrapper}>
              <View style={styles.contentItemWrapper}>
                <View style={styles.contentContainer}>
                  <AverageSpent/>
                  <Texts bold style={styles.contentText}>Average Spent</Texts>
                </View>
                <Texts bold style={styles.amountText}>{formatMoney(650.12)}</Texts>
              </View>
            </View>
            <Divider style={styles.paddingAlign}/>
        </View>
        <Texts bold style={styles.pageTextHeader}>SUBSCRIPTION</Texts>
        <View style={styles.contentWrapper}>
          <View style={styles.bottomWrapper}>
            <View>
              <Texts bold style={styles.bottomTextHeader}>Repeating Payment</Texts>
              <Texts style={styles.bottomText}>We will predict this for you in summary</Texts>
            </View>

            <Switch
            trackColor={{ false: switchFalse, true: success}}
            thumbColor={switchValue ? white : "#f4f3f4"}
            onValueChange={()=>setSwitchValue(!switchValue)}
            value={switchValue}
          />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}