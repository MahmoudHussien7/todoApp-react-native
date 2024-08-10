// src/screens/Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { fetchTodos } from "../Store";

export default function Home({ navigation }) {
  const [editing, setEditing] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ImageBackground
      source={require("../../assets/pexels-eberhardgross-1624496.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TodoForm editing={editing} setEditing={setEditing} />
        <Todos navigation={navigation} />
        <Button
          title="Go to Completed Tasks"
          onPress={() => navigation.navigate("CompletedTasks")}
        />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
});
