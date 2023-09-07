import React from 'react'
import './About.css'

const About=()=>{
    return (
      <section class="about" id="about">

            <img className='about-img' src={require('../../assets/personal_pic_purple.png')} alt=""/>
        

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Frontend Developer!</h3>
            <p>I am a fresh graduate with a bachelor’s degree in Information Technology , and i would discribe myself as a frontend developer and UI UX designer who creates beautiful and user-friendly web experiences. I have practical experience in using HTML, CSS, JavaScript, React, Bootstrap, Figma, etc. to design and develop websites and web applications for various domains. I am passionate about solving problems, learning new things, and collaborating with other developers and designers. I also have a keen eye for design and get inspired by art and animation. I am ambitious and always looking for new challenges and opportunities to grow as a professional.</p>
            <a href="#" class="btna">Read More</a>
        </div>
    </section>
    )
  }

export default About