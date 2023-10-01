import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { Avatar } from "react-native-paper"
import CustomCard from "../components/navigation/CustomCard"
import { FontAwesome } from "@expo/vector-icons"
import CustomSearchBar from "../components/navigation/CustomSearchBar"

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity>
          <FontAwesome
            name="search"
            size={24}
            color="black"
          />
        </TouchableOpacity> */}
        <CustomSearchBar />

        {/* <Text>Hola</Text> */}
        <Avatar.Image
          size={45}
          source={require("../assets/images/person1.jpeg")}
        />
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          <CustomCard />
        </View>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "red",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "blue",
  },
})
