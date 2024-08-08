import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function TodoDetailes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go to Splash"
        onPress={() => navigation.navigate("Splash")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
