import axios from "axios";
import React, { useEffect } from "react";
import "./ngo.profile.css";
import {
  Card,
  CardBody,
  CardFooter,
  Link,
  Text,
  Stack,
  Button,
  ButtonGroup,
  Heading,
  Divider,
  Image,
  HStack,
} from "@chakra-ui/react";
import NgoCampaign from "./Ngo.campaign";

function NgoProfile() {
  const [profiledata, setProfileData] = React.useState([]);
  // useEffect(()=>{

  //     axios
  //       .get("http://192.168.43.:3000/NGO/profile", {
  //         headers: {
  //           Authorization: localStorage.getItem("jwt"),
  //         },
  //       })
  //       .then((data) => {setProfileData(data.data) ;console.log(data)})
  //       .catch((error) => console.log(error));

  // }, [])
  return (
    <>
      <NgoProfileHelper
        name={"rajesh"}
        description={"this is a test description"}
        logo={
          "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        }
        website={"http://"}
        email={"rajesh@gmail.com"}
        followers={40}
        fundraised={100}
      />
    </>
  );
}

function Donor({ name }) {
  return (
    <div
      style={{
        margin: "20px 0px",
        width: "19vw",
        fontSize: "3vh",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {name}
    </div>
  );
}

function NgoProfileHelper({
  name,
  description,
  logo,
  website,
  email,
  followers,
  fundraised,
  spent,
  campaign,
}) {
  function uploadImage(event) {
    const input = event.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const dataURL = e.target.result;
        axios
          .post(
            "http://localhost:3000/NGO/picture",
            {
              logo: dataURL,
            },
            {
              headers: {
                Authorization: localStorage.getItem("jwt"),
              },
            }
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  return (
    <div id="ngoprofile">
      {/* <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav> */}
      {/* <div id="inner-container">
        <div id="logo-container">
          <img src={logo} alt="Profile Logo" />
          <h1>{name}</h1>
        </div>
        <input type="file" name="" id="avatar" onChange={uploadImage} />
        <p>{description}</p>
        <p>
          <strong>Website:</strong> <a href={website}>{website}</a>
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Followers:</strong> {followers}
        </p>
        <p>
          <strong>Fundraised:</strong> ${fundraised}
        </p>
        <p>
          <strong>Amount Spent:</strong> ${spent}
        </p>
        <hr />
        <h2>Claim History</h2>
        <ul>
          {campaign.map((claim) => (
            <li key={claim.id}>{claim.description}</li>
          ))}
        </ul>
      </div> */}

      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        width="60vw"
        height="25vh"
        padding={"10px"}
      >
        <Image
          objectFit="cover"
          height="22vh"
          width="22vh"
          borderRadius={"50%"}
          src={logo}
          alt="Caffe Latte"
          marginRight={"20px"}
        />

        <Stack padding={"0px"}>
          <CardBody>
            <Heading>{name}</Heading>

            <Link color="teal.500" fontSize={"20px"} href="#">
              {website}
            </Link>
            <Text>{email}</Text>
            <Text>{description}</Text>
            <HStack spacing="100px">
              <Text>
                <strong>Followers:</strong> {followers}
              </Text>
              <Text>
                <strong>fundraised:</strong> ${fundraised}
              </Text>
            </HStack>
          </CardBody>
        </Stack>
      </Card>
      <div
        id="container"
        style={{
          display: "flex",
          width: "60vw",
          justifyContent: "space-between",
        }}
      >
        <div id="ongoing">
          <Donor name="OnGoing Campaigns" />
          <NgoCampaign
            title={"oombu"}
            width="39vw"

            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            raised={"9"}
            goal="-10"
          />
          <NgoCampaign
            title={"oombu"}
            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            width="39vw"

            raised={"9"}
            goal="-10"
          />
          <NgoCampaign
            title={"oombu"}
            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            width="39vw"

            raised={"9"}
            goal="-10"
          />
        </div>
        <div id="donors">
          <Donor name="Top Donors" />
          <Donor name="Mohan" />
          <Donor name="Rajesh" />
          <Donor name="Ganesh" />
        </div>
      </div>
      <div id="success">
          <Donor name="Successful Campaigns" />
          <NgoCampaign
            title={"oombu"}
            width="60vw"
            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            raised={"9"}
            goal="-10"
          />
          <NgoCampaign
            title={"oombu"}
            width="60vw"
            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            raised={"9"}
            goal="-10"
          />
          <NgoCampaign
            title={"oombu"}
            width="60vw"
            image={
              "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            description={"punda is not word it is an emotion"}
            raised={"9"}
            goal="-10"
          />
        </div>
    </div>
  );
}

export default NgoProfile;
