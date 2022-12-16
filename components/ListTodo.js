import React, { useState } from "react";
import { StyleSheet, FlatList, Dimensions, Alert } from "react-native";
import { Flex, ListItem, Text } from "@react-native-material/core";
import { Checkbox } from "react-native-paper";

const { height } = Dimensions.get("screen");

export default function ListTodo({ todo, setTodo }) {
  const longPress = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Delete",
        onPress: () => {
          setTodo((todo) => todo.filter((key) => key.id != id));
        },
      },
      { text: "Cancel" },
    ]);
  };

  const pressCheck = (item) => {
    const data = todo;
    data.map((key) => {
      if (key.id === item.id) {
        return (key.complete = true);
      }
    });
    setTodo(data);
  };

  return (
    <Flex h={height / 1.6} mt={20} ph={20}>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={
              <Text
                variant="h6"
                style={item.complete ? styles.completed : styles.unCompleted}
              >
                {item.item}
              </Text>
            }
            leading={
              <Checkbox
                disabled={item.complete ? true : false}
                status={item.complete ? "checked" : "unchecked"}
                onPress={() => {
                  pressCheck(item);
                  console.log(todo);
                }}
              />
            }
            onLongPress={() => longPress(item.id)}
          />
        )}
      />
    </Flex>
  );
}

const styles = StyleSheet.create({
  completed: {
    textDecorationLine: "line-through",
  },
  unCompleted: {
    textDecorationLine: "none",
  },
});
