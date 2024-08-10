// src/components/TodoForm.js
import React, { useState } from "react";
import { StyleSheet, TextInput, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Store";

export default function TodoForm({ editing, setEditing }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddOrUpdate = () => {
    if (editing) {
      dispatch(
        updateTodo({
          id: editing,
          title,
          description,
          status: "active",
        })
      );
      setEditing(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          title,
          description,
          status: "active",
        })
      );
    }
    setTitle("");
    setDescription("");
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        color="white"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Todo Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button
        title={editing ? "Update Todo" : "Add Todo"}
        onPress={handleAddOrUpdate}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: "white",
  },
});
