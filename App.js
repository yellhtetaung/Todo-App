import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Dimensions, Alert } from "react-native";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const { height } = Dimensions.get("screen");

export default function App() {
  const [todos, setTodos] = useState([
    { item: "have to cook", complete: false, id: "1" },
    { item: "have to eat", complete: false, id: "2" },
    { item: "have to sleep", complete: false, id: "3" },
    { item: "have to read", complete: false, id: "4" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AddTodo setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: height / 20,
  },
});
