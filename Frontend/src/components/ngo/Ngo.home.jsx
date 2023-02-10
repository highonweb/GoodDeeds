import React from 'react'
import './ngo.home.css'
import Ngofeeds from  './Ngo.feeds'
function NgoHome() {
  return (
    <div id='ngohome'>
      <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <div>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Explore</a></li>

            </div>

        </ul>
    </nav> 
    <section id='feeds'>
      <Ngofeeds/>
    </section>
      
    </div>
  )
}

export default NgoHome