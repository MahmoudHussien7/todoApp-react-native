// src/components/TodoItem.js
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../Store";

export default function TodoItem({ todo, navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text style={styles.todoDescription}>{todo.description}</Text>
      <Button
        title={todo.status === "active" ? "Mark as Done" : "Mark as Active"}
        onPress={() =>
          dispatch(
            toggleTodoStatus({
              id: todo.id,
              status: todo.status === "active" ? "done" : "active",
            })
          )
        }
      />
      <Button
        title="Edit"
        color="orange"
        onPress={() => navigation.navigate("TodoDetailes", { id: todo.id })}
      />
      <Button
        title="Delete"
        color="red"
        onPress={() => dispatch(deleteTodo(todo.id))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  todoDescription: {
    fontSize: 14,
    color: "#555",
  },
});
