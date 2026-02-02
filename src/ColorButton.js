import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ColorButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(color)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

