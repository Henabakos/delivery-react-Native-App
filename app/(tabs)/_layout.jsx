import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  return (
   <Tabs  screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#FF123D', borderTopLeftRadius: 30, borderTopRightRadius: 30 } , tabBarScrollEnabled: true }}  >
        <Tabs.Screen name="home" options={{
            tabBarLabel: 'Home',
            tabBarIcon : ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} />
        <Tabs.Screen name="explore" options={{
            tabBarLabel: 'Explore',
            tabBarIcon : ({ color }) => <Ionicons name="search" size={24} color={color} />
        }}/>
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'people',
            tabBarIcon : ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
        }}/>
        <Tabs.Screen name="burger" options={{
            tabBarLabel: 'people',
            tabBarIcon : ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
        }}/>
        
   </Tabs>
  )
}