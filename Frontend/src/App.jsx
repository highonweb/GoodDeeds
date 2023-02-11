import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home";
import NgoProfile from "./components/ngo/Ngo.profile";
import Ngohome from "./components/ngo/Ngo.home";
import NgoRegister from "./components/ngo/Ngo.register";
import Signin from "./components/signin/Signin";
import UserRegister from "./components/users/User.register";
import Search from "./components/search/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Search />
      {/* <NgoProfile
        name="This is a ngo "
        description="test"
        logo="https://via.placeholder.com/200 "
        website="https://"
        email="rajesh@gmail.com"
        followers="2"
        fundraised="3"
        spent="2"
        campaign={["rajesh", "raju"]}
      /> */}
      {/* <Signin></Signin> */}
      {/* <NgoRegister></NgoRegister> */}
    </div>
  );
}

export default App;
