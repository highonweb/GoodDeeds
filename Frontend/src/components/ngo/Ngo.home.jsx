import React, { useEffect } from "react";
import "./ngo.home.css";
import Ngofeeds from "./Ngo.feeds";
import axios from "axios";
function NgoHome() {
  const [feeds, setFeeds] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://192.168.28.251:3000/users/campaigns", {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      })
      .then((data) => {
        setFeeds(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="ngohome">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <div>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
          </div>
        </ul>
      </nav>
      <section id="feeds">
        {feeds.map((feed) => {
          return (
            <Ngofeeds
              key={feed._id}
              id={feed._id}
              name={feed.ngo.name}
              raised={feed.raised}
              goal={feed.goal}
              description={feed.description}
              title={feed.title}
              image={feed.image}
            />
          );
        })}
      </section>
    </div>
  );
}

export default NgoHome;
