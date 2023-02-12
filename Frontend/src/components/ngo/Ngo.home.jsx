import React, { useEffect } from 'react'
import './ngo.home.css'
import Ngofeeds from  './Ngo.feeds'
import axios from 'axios'
import { Navigate , Link} from 'react-router-dom'
function NgoHome() {
  const [feeds, setFeeds] = React.useState([])
  const [auth, setAuth] = React.useState(false)
  React.useEffect(()=>{
    if(localStorage.getItem('jwt')){
      setAuth(true)
   }
    axios.get('http://192.168.28.251:3000/users/campaigns',{
      headers:{
        'Authorization':localStorage.getItem('jwt')
      }
    })
    .then((data)=>{setFeeds(data.data)})
    .catch(error=>console.log(error))
  }, [])
  if(!auth){
    return <Navigate to='/signin' replace/>
  }
  return (
    <div id='ngohome'>
      <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <div>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/explore'>Explore</Link></li>

            </div>

        </ul>
    </nav> 
    <section id='feeds'>
      {
        feeds.map((feed)=>{
          return(
           <Ngofeeds key={feed._id} name={feed.ngo.name} raised={feed.raised} goal={feed.goal} description={feed.description} title={feed.title} image={feed.image}/>
 
          )
       })
      }
    </section>
      
    </div>
  )
}

export default NgoHome