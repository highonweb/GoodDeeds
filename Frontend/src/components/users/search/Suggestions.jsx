// import axios from 'axios'
import axios from "axios";
import React from "react";
import "./suggestions.css";
import { Heading, IconButton, Link } from "@chakra-ui/react";
function Suggestions({ id, name, description, website, photo }) {
  const [likes, setLikes] = React.useState(0);
  const [follows, setFollows] = React.useState(0);
  
  const initialRequest = ()=>{
    axios
      .get("http://192.168.28.251:3000/users/likes?id=" + id, {
        headers: {
          'Authorization': localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        console.log(data.data.likes);
        setLikes(data.data.likes);
      });

      axios
      .get("http://192.168.28.251:3000/users/follows?id=" + id, {
        headers: {
          'Authorization': localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        // console.log(data.follows);
        setFollows(data.data.follows);
      });
  }

  React.useEffect(() => {
    initialRequest()
  });

  const handleFollow = () => {
    axios
      .post(
        "http://192.168.28.251:3000/users/follow",{
            id
        }
        ,
        {
          headers: {
            'Authorization': localStorage.getItem("jwt"),
          },
        }
      )
      .then(data=>console.log(data));

     initialRequest() 
  };
  return (
    <div id="suggestions">
      <div id="profile">
        <Heading marginBottom="10px">{name}</Heading>
        <Link id="website">{website}</Link>
        <p id="description">{description}</p>

        <div id="like-follow">
          <div id="like">
            <IconButton
              colorScheme="pink"
              onClick={() => {
                axios
                  .post(
                    "http://192.168.28.251:3000/users/like",
                    {
                      id,
                    },
                    {
                      headers: {
                        Authorization: localStorage.getItem("jwt"),
                      },
                    }
                  )
                  .then(console.log)
                  .then(()=>initialRequest());
              }}
            >
              <ion-icon name="heart"></ion-icon>
            </IconButton>
            <h2>{likes}</h2>
          </div>
          <div id="follow">
            <IconButton colorScheme="blue">
              <ion-icon
                name="person-add-outline"
                onClick={handleFollow}
              ></ion-icon>
            </IconButton>
            <h2>{follows}</h2>
          </div>
        </div>
      </div>

      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default Suggestions;
