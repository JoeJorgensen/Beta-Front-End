import React, {useEffect, useState} from 'react'
import {View, Text, Button, StyleSheet, SafeAreaView, Pressable, ScrollView} from 'react-native'

import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import SettingsScreen from './screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen'
import BrowseStackNavigator from './screens/BrowseStackNavigator'




const Tab = createBottomTabNavigator()

const App = ()=>{



return (
  <NavigationContainer>
  
  <Tab.Navigator>
    <Tab.Screen name= 'Home' component = {HomeScreen}/>
    <Tab.Screen name= 'Browse' component = {BrowseStackNavigator}/>
    <Tab.Screen name= 'Settings' component = {SettingsScreen}/>

  </Tab.Navigator>

  
  </NavigationContainer>
)
}



export default App