import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { palette } from "../../global/themas";

interface Props extends TextInputProps {
  icon: keyof typeof MaterialIcons.glyphMap;
}

export default function Input({ icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={20} color={palette.textSecondary} />

      <TextInput
        style={styles.input}
        placeholderTextColor={palette.textSecondary}
        {...rest}
      />
    </View>
  );
}