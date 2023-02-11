import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/signin/Signin";
import NgoRegister from "./components/ngo/Ngo.register";
import UserRegister from "./components/users/User.register";
import Explore from "./components/explore/Explore";
import ProtectedRoute from "./components/ProtectedRoute";
import Chat from "./components/chat/Chat";
import NgoHome from "./components/ngo/Ngo.home";
import NgoProfile from "./components/ngo/Ngo.profile";
import NgoCreateCampaign from "./components/ngo/Ngo.createcampaign";
const auth = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: (
 
        <App />
  
    ),
  },
  {
    path: "/home",
    element: (
 
        <NgoHome />
  
    ),
  },
  {
    path: "/profile",
    element: (
 
        <NgoProfile />
  
    ),
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup/ngo",
    element: <NgoRegister />,
  },
  {
    path: "/signup/user",
    element: <UserRegister />,
  },
  {
    path: "/explore",
    element: (
      <ProtectedRoute isAuth={auth}>
        <Explore />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute isAuth={auth}>
        <Chat />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ngo/createcampaign",
    element: (
      <ProtectedRoute isAuth={auth}>
        <NgoCreateCampaign/>
      </ProtectedRoute>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
