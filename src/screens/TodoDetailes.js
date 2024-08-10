// src/screens/TodoDetailes.js
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../Store";

export default function TodoDetails({ route, navigation }) {
  const { id } = route.params;
  const todo = useSelector((state) =>
    state.todos.items.find((todo) => todo.id === id)
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        title,
        description,
        status: todo.status,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Update Todo" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fbeeee",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
