import {
  Card,
  CardHeader,
  Stack,
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
import { GroundOverlay } from "@react-google-maps/api";

import React from "react";

const NgoCampaign = (props) => {
  return (
    <div
      style={{
        width: props.width,
        display:"flex",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        border: "0.5px solid rgba(0,0,0,0.4)",
        margin: "20px auto",
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{
          width: "25vw",
        }}
      />
      <div style={{ padding: "20px" }}>
        <p style={{ margin: "0", fontSize:"30px",padding:"0" }}>{props.title}</p>
        <p style={{ margin: "10px 0", fontSize: "14px" }}>
          {props.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: "0" }}>Raised: ${props.raised}</p>
          <p style={{ margin: "0" }}>Goal: ${props.goal}</p>
        </div>
      </div>
    </div>
  );
};

export default NgoCampaign;
