// src/components/Background.js
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/colorful-painting-rainbow-colored-background_1034303-215011.avif")} // Adjust the path as needed
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Background;
