// src/screens/Home.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
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
    <View style={styles.container}>
      <TodoForm editing={editing} setEditing={setEditing} />
      <Todos navigation={navigation} />
      <Button
        title="Go to Completed Tasks"
        onPress={() => navigation.navigate("CompletedTasks")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fbeeee",
  },
});
