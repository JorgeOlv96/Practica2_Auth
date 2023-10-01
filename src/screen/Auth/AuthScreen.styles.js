import { StyleSheet } from "react-native"
import Fonts from "../../constants/Fonts"
import Colors from "../../constants/Colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: Fonts.size.large,
    fontWeight: "bold",
    marginBottom: 20,
  },
})
