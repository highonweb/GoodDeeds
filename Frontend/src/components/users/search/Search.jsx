import axios from "axios";
import React from "react";
import "./search.css";
import Suggestions from "./Suggestions";
import { Input, Heading, Button } from "@chakra-ui/react";
const Search = () => {
  const [searchdata, setSearchData] = React.useState([])
  React.useEffect(() => {
    axios.get(`http://192.168.28.251:3000/users/NGOs`, {
      headers:{
        'Authorization':localStorage.getItem('jwt')
      }
    }).then((res) => { setSearchData(res.data); console.log(res.data) })
  },[])

  const handleSearch = async (query) => {
    //  await axios.get('http://192.168.28.251:3000')
    await axios.get(`http://192.168.28.251:3000/users/NGOsearch/?q=` + query, {
      headers:{
        'Authorization':localStorage.getItem('jwt')
      }
    })
      .then((data) => { setSearchData(data.data); console.log(data.data) })
      .catch(error => console.log(error))

  }



  return (
    <div id="container">
      <div id="side">
        <img src="./logo.svg" alt="" />
        <div id="searchBar">
          <input
            type="search"
            name="search"
            placeholder="Search NGOs here"
            id="search"
            onChange={(e) => { handleSearch(e.target.value) }}
          />


        </div>
      </div>
      <div id="side">
        <div id="sidePanel"></div>
        <div id="mainPanel">
          {searchdata.map((data) => {
            if (data.item == undefined) return (
              <Suggestions
                key={data._id}
                id={data._id}
                name={data.name}
                description={data.description}
                website={data.website}
                photo="https://via.placeholder.com/200" />
            )
            else
              return (
                <Suggestions
                  key={data.item._id}
                  id={data.item._id}
                  name={data.item.name}
                  description={data.item.description}
                  website={data.item.website}
                  photo="https://via.placeholder.com/200" />
              )
          })}


        </div>
      </div>
    </div>
  );
};

export default Search;
