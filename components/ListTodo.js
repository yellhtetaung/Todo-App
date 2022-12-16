import React, { useState } from "react";
import { StyleSheet, FlatList, Dimensions, Alert } from "react-native";
import { Flex, ListItem, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const { height } = Dimensions.get("screen");

export default function ListTodo({ todos, setTodos }) {
  const longPress = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      {
        text: "Delete",
        onPress: () => {
          setTodos((todo) => todo.filter((key) => key.id != id));
        },
      },
      { text: "Cancel" },
    ]);
  };

  const pressCheck = (item) => {
    const data = todos;
    data.map((key) => {
      if (key.id === item.id) {
        return (key.complete = true);
      }
    });
    setTodos(data);
  };

  console.log(todos);

  return (
    <Flex h={height / 1.6} mt={20} ph={20}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={
              <Text
                variant="subtitle1"
                style={item.complete ? styles.completed : styles.unCompleted}
              >
                {item.item}
              </Text>
            }
            leading={
              <Icon
                name={
                  item.complete ? "checkbox-marked" : "checkbox-blank-outline"
                }
                size={25}
                color="#3F0071"
              />
            }
            onLongPress={() => longPress(item.id)}
            onPress={() => pressCheck(item)}
          />
        )}
      />
    </Flex>
  );
}

const styles = StyleSheet.create({
  completed: {
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  unCompleted: {
    fontSize: 18,
    textDecorationLine: "none",
  },
});
