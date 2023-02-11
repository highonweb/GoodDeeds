import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/Home";
import NgoProfile from "./components/ngo/Ngo.profile";
import Ngohome from "./components/ngo/Ngo.home";
import NgoRegister from "./components/ngo/Ngo.register";
import Signin from "./components/signin/Signin";
import UserRegister from "./components/users/User.register";
import Search from "./components/users/search/Search";
import NgoCreateCampaign from "./components/ngo/Ngo.createcampaign";
import Explore from "./components/explore/Explore";
import Chat from "./components/chat/Chat";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Search />
       {/* <NgoCreateCampaign/> */}
       {/* <Signin></Signin>
      <NgoRegister></NgoRegister> */}
      {/* <NgoProfile/> */}
      {/* <NgoRegister/> */}
      {/* <UserRegister/> */}
      {/* <Ngohome/> */}
      {/* <Home/> */}
      {/* <Chat/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
