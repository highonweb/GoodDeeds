import axios from 'axios'
import React from 'react'
import './ngo.createcampaign.css'
import { Button, Input, Heading, Textarea } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'
function NgoCreateCampaign() {
    const [auth,setAuth] = useState(false)
    React.useEffect(()=>{
      if(localStorage.getItem('jwt')){
        setAuth(true)
     }
    }) 
    const [title, setTitle] = React.useState('')
    const [image, setImageUrl] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [raised, setRaised] = React.useState('')
    const [goal, setGoal] = React.useState('')

    const handlesubmit = async (e)=> {
        e.preventDefault()
        let res = await axios.post('http://192.168.28.251:3000/NGO/campaign', {
           
            title,
            image,
            description,
            raised,
            goal
       
        },
        {
          headers:{
            'Authorization':localStorage.getItem('jwt')
          }
        })
        return(
          <Navigate to='/home' replace  />
        )
        console.log(res.data)
    }
    if(!auth){
      return <Navigate to='signin' replace/>
    }
  return (
    <div id='createcampaign'>
       <form onSubmit={(e)=>handlesubmit(e)}>
            <Heading>create campaign</Heading>
            <Input type="text" name="" id="" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Image url' onChange={(e) => { setImageUrl(e.target.value) }} required />
                <Textarea type="text" name="" id="" placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Raised' onChange={(e) => { setRaised(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Goal' onChange={(e)=>{setGoal(e.target.value)}}/>
                <Button colorScheme="red" type='submit'>create</Button>
               
            
       </form>
    </div>
  )
}

export default NgoCreateCampaign