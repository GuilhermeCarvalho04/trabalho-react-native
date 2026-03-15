import { StyleSheet } from "react-native";
import { palette } from "../../global/themas";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 55,
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: palette.textPrimary,
  },
});