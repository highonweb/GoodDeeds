import React, { useState } from "react";
import { Flex, Box, Textarea, Button, Stack, Text } from "@chakra-ui/react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: message, sender: "You" }]);
    setMessage("");
  };

  return (
    <Flex direction="column" alignItems="center">
      <Box width="50%" my={4} p={4} boxShadow="md" borderWidth="1px">
        <Stack spacing={4}>
          {messages.map((msg, index) => (
            <Box key={index} p={2} bg={msg.sender === "You" ? "blue.50" : "gray.50"} borderRadius="md">
              <Text>{msg.sender}: {msg.text}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box width="50%" my={4} p={4} boxShadow="md" borderWidth="1px">
        <form onSubmit={handleSubmit}>
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button mt={4} type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Chat;