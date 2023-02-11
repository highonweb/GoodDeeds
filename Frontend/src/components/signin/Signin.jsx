import React from 'react'
import './signin.css'
import axios from 'axios'
import { Button, Heading, Input, Checkbox, Text } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';

function Signin() {
  const [auth, setAuth] = React.useState(false)
  React.useEffect(()=>{
    if(localStorage.getItem('jwt')){
        setAuth(true)

    }
  },[])
  
  const [email, setEmail] = React.useState("");
  const [isNGO,  setIsNGO] = React.useState("");

  const [password, setPassword] = React.useState("");

  const handleSignin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://192.168.28.251:3000/signin", {
        email,
        isNGO,
        password,
      });
      
      console.log(response.data);
      localStorage.setItem('jwt', "Bearer " + response.data.jwt)
      setAuth(true)
    } catch (error) {
      alert('no such user found')
    }
  };

  {

  }
  if(auth)
    return <Navigate to="/" replace />
  
  else{
    return (
      <div id='signin'>
       <form id='form' onSubmit={(e)=>handleSignin(e)}>
          <Heading>signin</Heading>
          <Input type="text" name='' placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
          <Input type="password" name="" id="" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
         
             <div id='checkbox'>
             <label htmlFor="ngo">Are you an NGO?</label>
             <Checkbox margin={0} name="ngo" id="ngo" onChange={(e)=>{setIsNGO(e.target.checked)}} />
             </div>
      
          
          <Button type='submit' colorScheme="red">signin</Button>
          <p>Don't have an account? <span><Link to='/signup/ngo'><Text textDecoration={"underline"}>Signup</Text></Link></span></p>
       </form>
      </div>
    )
  }
}

export default Signin