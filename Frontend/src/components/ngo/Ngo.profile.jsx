import axios from "axios";
import React from "react";
import "./ngo.profile.css";
function NgoProfile({
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
  const get = () => {
    axios
      .get("http://192.168.28.251:3000/NGO/profile", {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

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
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </nav>
      <div id="inner-container">
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
        {/* <ul>
          {campaign.map((claim) => (
            <li key={claim.id}>{claim.description}</li>
          ))}
        </ul> */}
        <button onClick={get}>get</button>
      </div>
    </div>
  );
}

export default NgoProfile;
