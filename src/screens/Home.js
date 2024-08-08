import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null);

  const addTodo = () => {
    if (title && description) {
      if (editing !== null) {
        setTodos(
          todos.map((todo) =>
            todo.id === editing ? { ...todo, title, description } : todo
          )
        );
        setEditing(null);
      } else {
        setTodos([
          ...todos,
          { id: Date.now(), title, description, status: "active" },
        ]);
      }
      setTitle("");
      setDescription("");
    }
  };

  const changeStatus = (id, status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  const getFilteredTodos = () => {
    if (filter === "All") return todos;
    return todos.filter((todo) => todo.status === filter.toLowerCase());
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setTitle(todo.title);
    setDescription(todo.description);
    setEditing(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
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
        title={editing !== null ? "Update Todo" : "Add Todo"}
        onPress={addTodo}
      />
      <View style={styles.divider} />
      <View style={styles.filterContainer}>
        {["All", "active", "done"].map((status) => (
          <TouchableOpacity key={status} onPress={() => setFilter(status)}>
            <Text
              style={[
                styles.filterButton,
                filter === status && styles.selectedFilter,
              ]}
            >
              {status.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={getFilteredTodos()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.title}</Text>
            <Text style={styles.todoDescription}>{item.description}</Text>
            {item.status === "active" ? (
              <Button
                title="Mark as Done"
                onPress={() => changeStatus(item.id, "done")}
              />
            ) : (
              <Button
                title="Mark as Active"
                onPress={() => changeStatus(item.id, "active")}
              />
            )}
            <Button
              title="Edit"
              color="orange"
              onPress={() => handleEdit(item.id)}
            />
            <Button
              title="Delete"
              color="red"
              onPress={() => handleDelete(item.id)}
            />
            <Button
              title="Go to TodoDetails"
              onPress={() => navigation.navigate("TodoDetailes")}
            />
          </View>
        )}
      />
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
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
    padding: 20,
    gap: 8,
    backgroundColor: "#fbeeee",
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
  },
  selectedFilter: {
    backgroundColor: "#ddd",
  },
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