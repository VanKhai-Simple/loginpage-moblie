import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const phoneRegex = /^[0-9]{10}$/;

    if (!phone) {
      setError("Vui lòng nhập số điện thoại");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại phải gồm đúng 10 chữ số");
      return;
    }

    // hợp lệ
    setError("");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null
        ]}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={(text) => {
          setPhone(text);
          setError(""); // xoá lỗi khi user nhập lại
        }}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 5,
    marginBottom: 10,
  },
});