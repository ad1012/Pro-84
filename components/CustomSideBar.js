import * as React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class CustomSideBar extends React.Component{
    render() {
        return (
          <View style={{flex:1}}> 
          <DrawerItems {...this.props}/> 
          <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}> 
          <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}} 
          onPress = {() => { 
            this.props.navigation.navigate('WelcomeScreen') 
            firebase.auth().signOut() 
            }}> 
            <Text>Logout</Text> 
            </TouchableOpacity> 
            </View> 
            </View> 
            ) 
          } 
        }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      drawerItemsContainer: {
        flex: 0.8,
      },
      logOutContainer: {
        flex: 0.2,
        justifyContent: "flex-end",
        paddingBottom: 30,
      },
      logOutButton: {
        height: 60,
        width: "100%",
        justifyContent: "center",
        padding: 10,
      },
      logOutText: {
        fontSize: 30,
        fontWeight: "bold",
      },
    });