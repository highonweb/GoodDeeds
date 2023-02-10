import React from 'react'
import './signin.css'

function Signin() {


  return (
    <div id='signin'>
     <form id='form' onSubmit={(e)=>handleSignin(e)}>
        <h1>signin</h1>
        <input type="text" name='' placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" name="" id="" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
        <button type='submit'>signin</button>
     </form>
    </div>
  )
}

export default Signin