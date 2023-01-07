import Airways from '../assets/svgs/airways.svg';
import UserTransaction from '../assets/images/userTransact.png';
import VTU from  '../assets/svgs/vtu.svg';
import Invoice from  '../assets/svgs/invoice1.svg';
import CurrentAccount from '../assets/svgs/currentAccount.svg'
import SavingAccount from '../assets/svgs/savingAccount.svg'
import TaxAccount from '../assets/svgs/taxAccount.svg'
import { fadePink, fadePurple, lightPurple } from './colors';
export const transactionData = [
    {
        id:1,
        icon:Airways,
        name:"British Airways",
        type:"Travel",
        amount:500
    },
    {
        id:2,
        icon:VTU,
        name:"MTN Mobile",
        type:"Utility",
        amount:250.79,
        debit:true
    },
    {
        id:3,
        icon:Invoice,
        name:"Invoice #04404",
        type:"invoice",
        amount:1050,
    },
    {
        id:4,
        icon:UserTransaction,
        name:"Christina Rose",
        type:"salary",
        amount:2500000,
        debit:true,
        image:true
    }
]

export const cardItems = [
    {
      id:1,
      header:'CURRENT ACCOUNT',
      subText: '00-00-00-00-00-00',
      amount:5234.96,
      leftIcon:CurrentAccount,
      leftIconBackground:fadePink

    },
    {
      id:2,
      header:'SAVINGS',
      subText:'00-00-00-00-00-00',
      amount:3234.43,
      leftIcon:SavingAccount,
      leftIconBackground:fadePurple,
    },
    {
      id:3,
      header:'TAX ACCOUNT',
      subText:'00-00-00-00-00-00',
      amount:10234,
      leftIcon:TaxAccount,
      leftIconBackground:lightPurple
    }
  ]