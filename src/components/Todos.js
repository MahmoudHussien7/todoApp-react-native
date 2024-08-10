// src/components/Todos.js
import React from "react";
import { FlatList, ScrollView } from "react-native";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function Todos({ navigation }) {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ScrollView>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} navigation={navigation} />
        )}
      />
    </ScrollView>
  );
}
