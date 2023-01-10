import Home from "../screens/Home";
import Comments from "../screens/Comments";
import Splash from '../screens/Splash';
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import Venue from "../screens/Venue";

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
  {
    screen:Comments,
    name:"Comments"
  },
  {
    screen:Venue,
    name:"Venue"
  },
]
