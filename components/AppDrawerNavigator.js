import * as React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SettingsScreen from "../screens/SettingsScreen";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBar from "./components/CustomSideBar";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { 
        screen: AppTabNavigator 
    },
   
  Settings: {
    screen: SettingsScreen
  },
},
  { 
      contentComponent: CustomSideBar 
    },
  { 
      initialRouteName: 'Home' 
    },
);