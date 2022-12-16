import React from "react";
import { Flex, Text } from "@react-native-material/core";

export default function Header() {
  return (
    <Flex center>
      <Text
        variant="h4"
        color="orange"
        style={{
          fontWeight: "bold",
          letterSpacing: 2,
          textTransform: "uppercase",
          textShadowOffset: { width: 2, height: 2 },
          textShadowColor: "#222",
          textShadowRadius: 3,
        }}
      >
        Todo List
      </Text>
    </Flex>
  );
}
