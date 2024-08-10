// src/components/TodoItem.js
import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, deleteTodo } from "../Store";

export default function TodoItem({ todo, navigation }) {
  const dispatch = useDispatch();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const openDeleteModal = (id) => {
    setTodoToDelete(id);
    setDeleteModalVisible(true);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todoToDelete));
    setDeleteModalVisible(false);
  };

  return (
    <ScrollView style={styles.todoItem}>
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
        onPress={() => openDeleteModal(todo.id)}
      />
      <Modal
        visible={deleteModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this todo?
            </Text>
            <View style={styles.modalButtonContainer}>
              <Button
                title="Cancel"
                onPress={() => setDeleteModalVisible(false)}
              />
              <Button title="Delete" color="red" onPress={handleDelete} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
    color: "white",
  },
  todoDescription: {
    fontSize: 14,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
