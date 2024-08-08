import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
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
