import Home from "../screens/Home";
import Splash from '../screens/Splash';
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'

export const WelcomeStack = 
[
  {
    screen:Splash,
    name:"Splash"
  },
  {
    screen:Login,
    name:"Login"
  },
  {
    screen:Register,
    name:"Register"
  }
];

export const AppStack = 
[
  {
    screen:Home,
    name:"Home"
  },
]
