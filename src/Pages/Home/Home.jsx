import React from 'react';
import Typed from 'react-typed';

import './Home.css'
const Home =()=> {
    return (
      <section class="home" id="home">
      <div class="home-content">
          <h3>Hey 👋, I'm</h3>
          <h1>Shareef Ali</h1>
          <h3>And I'm a 
            <span class="multiple-text"> &nbsp;
            <Typed strings={['Frontend Developer', 'UI/UX Designer']}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            loop={true}
          />
          </span></h3>
          <p> Ambishios Developer With magical hands that can create and design Modern responsive websites and web apps. </p>
          <div class="social-media">
              <a href="https://www.linkedin.com/in/shareef-ali" target="_blank"><i class='bx bxl-linkedin'></i></a>
              <a href="https://github.com/shareef99997" target="_blank"><i class='bx bxl-github'></i></a>
              <a href="https://twitter.com/SHIFO_99997" target="_blank"><i class='bx bxl-twitter'></i></a>
              <a href="mailto:shareef.99997@gmail.com" target="_blank"><i class='bx bxl-gmail'></i></a>
          </div>
          <a href="https://fileservice.pdffiller.com/secure/3Y_nyOD2NJghwhIVagOgr4SO2cScwCj39_ldWKMMtKHQGJHuHeDumTRE8XhaFbWHHvyTigJvXhlGStdbpaA85qBxTEobg82BlMkoQfgjWyAz?signature=606e9561453afa36c5fc6b08652608444481ee2d&key=B574C52A5858C9604457&expires=1693768164&crypt_key=s3GlWLH7VETRe7TQrGEurD8Ouu42LriM9bz9D2tek0lEUg11Q3RM3ZpJlb-QvrE0" class="btn">Download CV</a>
      </div>
      <div class="home-img">
          <img src={require('../../assets/personal_pic2_purple.png')} alt="" />
      </div>
  </section>
    )
  }

export default Home