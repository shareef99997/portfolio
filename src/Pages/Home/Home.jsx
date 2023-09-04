import React from 'react';
import Typed from 'react-typed';

import './Home.css'
const Home =()=> {
    return (
      <section class="home" id="home">
      <div class="home-content">
          <h3>Hello 👋, I'm</h3>
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
          <p>An Ambishios Developer With magical hands that can create and design Modern responsive websites and web apps. </p>
          <div class="social-media">
              <a href="https://www.linkedin.com/in/shareef-ali" target="_blank"><i class='bx bxl-linkedin'></i></a>
              <a href="https://github.com/shareef99997" target="_blank"><i class='bx bxl-github'></i></a>
              <a href="https://twitter.com/SHIFO_99997" target="_blank"><i class='bx bxl-twitter'></i></a>
              <a href="mailto:shareef.99997@gmail.com" target="_blank"><i class='bx bxl-gmail'></i></a>
              <a href="https://api.whatsapp.com/send?phone=966582635947&text=Hello%20Shareef%20%F0%9F%91%8B" target="_blank"><i class='bx bxl-whatsapp'></i></a>
          </div>
          <a href={require('../../assets/shareefs_CV.pdf' )} 
          
          download="Shareef's_CV" 
          
          class="btn">Download CV</a>
      </div>
      <div class="home-img">
          <img src={require('../../assets/personal_pic2_purple.png')} alt="" />
      </div>
  </section>
    )
  }

export default Home