import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import CurrentAccount from '../../assets/svgs/account1.svg'
import Invoice from '../../assets/svgs/invoice.svg'
import Pay from '../../assets/svgs/pay.svg'
import Summary from '../../assets/svgs/summary.svg'
import More from '../../assets/svgs/more.svg'
import Texts from '../Texts'
export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContentCurrent}>
        <CurrentAccount />
        <Texts bold style={styles.footerText}>Accounts</Texts>
      </View>
      <View style={styles.footerContent}>
        <Invoice/>
        <Texts bold style={styles.footerText1}>Invoice</Texts>
      </View>
      <View style={styles.footerContent}>
        <Pay />
        <Texts bold style={styles.footerText1}>Pay</Texts>
      </View>
      <View style={styles.footerContent}>
        <Summary />
        <Texts bold style={styles.footerText1}>Summary</Texts>
      </View>
      <View style={styles.footerContent}>
        <More />
        <Texts bold style={styles.footerText1}>More</Texts>
      </View>
    </View>
  )
}