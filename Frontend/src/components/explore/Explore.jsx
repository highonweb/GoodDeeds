import React, { useState } from "react";
import {
  Flex,
  Box,
  Stack,
  Text,
  Avatar,
  List,
  ListItem,
  Icon,
  Button,
  HStack
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Explore = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "John Doe", message: "Hey there! How are you?" },
    { id: 2, name: "Jane Doe", message: "Hi! I'm good. How about you?" },
    { id: 3, name: "Jim Smith", message: "I'm doing well. Thanks for asking." },
  ]);

  return (
    <Flex direction="column" alignItems="center">
      <Box width="50%" height="100vh" boxShadow="md" borderWidth="1px" margin={"10px"} boxSizing={"border-box"}>
        <List spacing={3}>
          {chats.map((chat) => (
            <ListItem key={chat.id} alignItems="center" margin={"30px"} padding="10px" borderBottom={"1px solid gray"}>
             
              <HStack alignItems={"Center"} justifyContent={"space-between"}>
              <HStack spacing={3}>
              <Avatar
                src="https://i.pravatar.cc/300"
                size="sm"
                mr={3}
              />
                <Stack>
                <Text fontWeight={600}>{chat.name}</Text>
                <Text>{chat.message}</Text>
                </Stack>

                
              </HStack>
              <Link to={'/profile'}>
              <Button
                size="sm"
          
                variantColor="purple"
                float="right"
              >
                <ion-icon name="navigate-outline"></ion-icon>
              </Button>
              </Link>
             
              </HStack>
              
            </ListItem>
          ))}
        </List>
      </Box>
      
    </Flex>
  );
};

export default Explore;
