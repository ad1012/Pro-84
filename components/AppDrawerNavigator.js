import * as React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import MyBarters from "../screens/MyBarters";
import SettingsScreen from "../screens/SettingsScreen";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBar from "./components/CustomSideBar";

export const AppDrawerNavigator = createDrawerNavigator(
  {
  Home: { 
      screen: AppTabNavigator 
    },
  MyBarters:{
    screen: MyBarters
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