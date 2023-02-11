import React from 'react'
import './ngo.register.css'
import axios from 'axios'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Input } from '@chakra-ui/react';
import { Textarea, Button, Badge, Heading, Text } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom';
const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const Map = ({ latitude, longitude }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "API_KEY_HERE"
  });
  const [markerPosition, setMarkerPosition] = React.useState({ lat: latitude, lng: longitude });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={8}
      center={{ lat: latitude, lng: longitude }}
      onClick={({ latLng }) => setMarkerPosition({ lat: latLng.lat(), lng: latLng.lng() })}
    >
      <Marker position={markerPosition} />
    </GoogleMap>
  );
};


function NgoRegister() {
    
    
    const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
    
    const [auth,setAuth] = React.useState(false)
    React.useEffect(()=>{
        if(localStorage.getItem('jwt')){
           setAuth(true)
        }
    })

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [logo, setLogo] = React.useState("")
    const [skills, setSkills] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');


    const [tags, setTags] = React.useState([])
    const [tagsInp, setTagsInp] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const handleAddSkill = () => {
        
       if(!inputValue == ""){
        setSkills([...skills, inputValue]);
        setInputValue('');
       }
    };
    const isValidEmail = (email) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (validRegex.test(email)) {
            return true;
        }
        else {
            return false
        }
    }

    const isValidPassword = (password) => {
        var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
        if (validRegex.test(password)) {
            return true;
        }
        else {
            return false
        }
    }
    const handleSignup = async (e) => {
        e.preventDefault();
        
        if (!isValidEmail(email)) {
            alert('invalid email')
        }
        else if (!isValidPassword(password)) {
            alert('Password must contain  6 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
        }
        else if (password != confirmPassword) {
            alert('password did not match')
        }
        else {
            try {
                const response = await axios.post("http://192.168.28.251:3000/signup/NGO", {
                    name,
                    email,
                    logo,
                    tags,
                    skills,
                    description,
                    password,
                    website
                });

                console.log(response.data);
                localStorage.setItem('jwt', "Bearer " + response.data.jwt)
                setAuth(true)

            } catch (error) {
                console.error(error);
            }
        }


    }
    if(auth){
        return <Navigate to='/' replace/>
    }
    return (
        <div id='register'>
            <form id='form' onSubmit={(e) => { handleSignup(e) }}>
                <Heading>Register</Heading>
                <Input type="text" name="" id="" placeholder='Name of your organisation' onChange={(e) => { setName(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Website' onChange={(e) => { setWebsite(e.target.value) }} required />
                <Input type="text" name="" id="" placeholder='Logo url' onChange={(e) => { setLogo(e.target.value) }} required />
                <div id='tags'>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="add goals"
                    />
                    <Button colorScheme="twitter" onClick={handleAddSkill}>Add goals</Button>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {skills.map((skill) => (
                            <Badge margin="10px" key={skill} colorScheme='green'>{skill}</Badge>
                        ))}
                    </div>
                </div>
                <Textarea name="" id="" placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} required />
                <Input type="password" name="" id="" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} required />
                <Input type="password" name="" id="" placeholder='confirm password' onChange={(e) => { setConfirmPassword(e.target.value) }} required />
                <Button type='submit' colorScheme="red">submit</Button>
                <p>Not an Ngo? <span><Link to='/signup/user'><Text textDecoration={"underline"}>Signup</Text></Link></span></p>

            </form>
        </div>
    )
}

export default NgoRegister