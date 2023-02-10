import React from 'react'
import './ngo.register.css'
import axios from 'axios'
function NgoRegister() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("") 
    const isValidEmail = (email)=>{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(validRegex.test(email)){
            return true;
        }
        else{
            return false
        }
    }
    
    const isValidPassword = (password)=>{
        var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
        if(validRegex.test(password)){
            return true;
        }
        else{
            return false
        }
    }
    const handleSignup = async (e)=>{
        e.preventDefault();
        
        if(!isValidEmail(email)){
            alert('invalid email')
        }
        else if(!isValidPassword(password)){
            alert('Password must contain  6 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        }
        else if(password != confirmPassword){
            alert('password did not match')
        }
        else{
            try {
                const response = await axios.post("http://192.168.28.251:3000/signup/NGO", {
                name,  
                email,
                description,
                password,
                });
          
                console.log(response.data);
                localStorage.setItem('jwt', "Bearer " + response.data.jwt)

              } catch (error) {
                console.error(error);
              }
        }
       
        
    }  
  return (
    <div id='register'>
      <form id='form' onSubmit={(e)=>{handleSignup(e)}}>
             <h1>register</h1>
            <input type="text" name="" id="" placeholder='Name of your organisation' onChange={(e)=>{setName(e.target.value)}} required/>
            <input type="text" name="" id="" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/> 
            <input type="text" name="" id="" placeholder='Email' onChange={(e)=>{setWebsite(e.target.value)}} required/> 

            <textarea name="" id="" placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}} required/> 
            <input type="password" name="" id="" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} required/>
            <input type="password" name="" id="" placeholder='confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
             <button>submit</button>
      </form>
    </div>
  )
}

export default NgoRegister