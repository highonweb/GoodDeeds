import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
const Home = () => {
  return (
    <div id='Home'>
        <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            
            <li id='signinbutton'><Link to='/signin'>Signin</Link></li>
        </ul>
    </nav>

      <header>
        <Heading>Good Deeds</Heading>
        <img src="./logo.svg" alt="" id='logo' />
        <div>
            <Link to='/signup/user'><button className='mbutt'>Donate</button></Link>
            <Link to='/signup/ngo'><button className='mbutt'>Raise Funds</button></Link>

        </div>
      </header>
        

      <main>
        <section>
          <h2>Our Mission</h2>
          <p>Our mission is to create a centralized platform that makes it easy for philanthropists to discover and support NGOs working in areas they are passionate about. We aim to improve transparency and accountability in the donation process and facilitate better collaboration between philanthropists and NGOs to help maximize the impact of their efforts.</p>
        </section>
        <section>
          <h2>How it Works</h2>
          <p>Our platform provides comprehensive information about each NGO, including their mission, history, and impact, to help philanthropists make informed decisions. Philanthropists can search for NGOs based on their areas of interest, and receive real-time updates on the use of their funds and the impact of their donations. NGOs can reach a larger audience and secure the funding they need to carry out their missions.</p>
        </section>
        <section>
          <h2>Join Us</h2>
          <p>Join our community of philanthropists and NGOs today and make a difference in the world. Whether you're an NGO looking for funding, or a philanthropist searching for organizations to support, we're here to help you achieve your goals. Sign up now and start making a positive impact.</p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 GoodDeeds</p>
      </footer>
    </div>
  );
};

export default Home;
