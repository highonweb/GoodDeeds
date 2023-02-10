import React from 'react'
import './signin.css'
import axios from 'axios'


function Signin() {

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
    } catch (error) {
      alert('no such user found')
    }
  };

  return (
    <div id='signin'>
     <form id='form' onSubmit={(e)=>handleSignin(e)}>
        <h1>signin</h1>
        <input type="text" name='' placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" name="" id="" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
       
           <div>
           <label htmlFor="ngo">Are you an NGO?</label>
           <input type="checkbox" name="ngo" id="ngo" onChange={(e)=>{setIsNGO(e.target.checked)}} />
           </div>
    
        
        <button type='submit'>signin</button>
     </form>
    </div>
  )
}

export default Signin