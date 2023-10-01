import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import HomeScreen from "../../../screen/HomeScreen"
import FavoritesScreen from "../../../screen/FavoritesScreen"
import AccountScreen from "../../../screen/AccountScreen"
import SettingsScreen from "../../../screen/SettingsScreen"
import Awesomefrom from "react-native-vector-icons/FontAwesome"
import { styles } from "./TabNavigation.styles.js"
export default function TabNavigation() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Tab.Navigator>
  )
}

const setIcon = (route, routeStatus) => {
  let iconName = ""
  let color = "#6e6e6e"
  if (routeStatus.focused) {
    color = "#3c5f6b"
  }
  if (route.name === "Home") {
    iconName = "home"
  } else if (route.name === "Settings") {
    iconName = "cog"
  } else if (route.name === "Favorites") {
    iconName = "heart"
  } else if (route.name === "Account") {
    iconName = "user"
  }
  return (
    <Awesomefrom
      name={iconName}
      size={24}
      color={color}
      style={styles.icon}
    />
  )
}
