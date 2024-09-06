import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  home,
  notification,
  profile,
  list,
  heart,
  cart,
  adjust,
} from "../../components/data";
export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FF123D",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Image
                source={home}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <Image
                source={list}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "people",
            tabBarIcon: ({ color }) => (
              <Image
                source={heart}
                style={{
                  width: 25,
                  height: 24,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="burger"
          options={{
            tabBarLabel: "people",
            tabBarIcon: ({ color }) => (
              <Image
                source={profile}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
