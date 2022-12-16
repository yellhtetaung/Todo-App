import React, { useState } from "react";
import { Keyboard } from "react-native";
import { Flex, Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function AddTodo({ setTodos }) {
  const [text, setText] = useState();

  const submitHandler = (text) => {
    if (text == undefined || text.length < 3) {
      Alert.alert("Required", "Todo need above 3 characters long", [
        { text: "Understood" },
      ]);
    } else {
      setTodos((todo) => [
        { item: text, complete: false, id: Math.random().toString() },
        ...todo,
      ]);
      setText("");
      Keyboard.dismiss();
    }
  };

  return (
    <Flex mt={30} ph={20}>
      <TextInput
        label="Enter New Todo"
        value={text}
        variant="standard"
        onChangeText={(text) => setText(text)}
      />
      <Stack mt={20}>
        <Button
          title="Add Todo"
          leading={(props) => <Icon name="plus" {...props} />}
          onPress={() => submitHandler(text)}
        />
      </Stack>
    </Flex>
  );
}
