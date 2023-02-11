import React from "react";
import axios from "axios";
import "./ngo.feeds.css";

import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  CardBody,
  Image,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
function Ngofeeds({ id, name, description, image, title, goal, raised }) {
  const [donation, setDonation] = React.useState(100);

  return (
    <div id="">
      {/* <div id='title'>
        <img src={logo} alt="" />
        <p>{name}</p>
        </div>
       <img src={img} alt=""/>
        
        <p>{description}</p> */}
      <Card width={"500px"} marginTop={"20px"}>
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name={name}
                src={`https://ui-avatars.com/api/?name=${name
                  .split(" ")
                  .join("+")}`}
              />

              <Box>
                <Heading size="sm">{name}</Heading>
                <Text>{title}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <Image
          objectFit="cover"
          src={image}
          alt="Chakra UI"
          alignItems={"center"}
          width={"auto"}
        />

        <CardFooter
          alignItems={"center"}
          justify="flex-start"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text variant="ghost">INR</Text>
            <input
              style={{
                width: "100px",
                margin: "0 10px",
                border: "1px solid grey",
                padding: "2px",
                borderRadius: "5px",
              }}
              type="text"
              onChange={(e) => setDonation(e.target.value)}
              placeholder="Enter Amt"
              value={donation}
            />
          </div>

          <Button
            onClick={async () => {
              let res = await axios.post(
                "http://localhost:3000/users/donate",
                {
                  campaign: id,
                  amount: donation,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("jwt"),
                  },
                }
              );
              console.log(res.data);
              location.href = res.data.link;
            }}
            colorScheme={"twitter"}
            variant="ghost"
          >
            Donate
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Ngofeeds;
