import { StyleSheet } from "react-native";

import { color, size } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems:  "center",
    justifyContent: "center",
  },
  logo: {
    width: size.moderateScale(200),
    height: size.moderateScale(200),
    objectFit: 'contain',
  }
})