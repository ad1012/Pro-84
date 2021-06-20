import react from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import ReceiverDetailsScreen  from '../screens/ReceiverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : LoginScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'BarterList'
  }
);