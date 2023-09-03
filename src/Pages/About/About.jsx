import React from 'react'
import './About.css'

const About=()=>{
    return (
      <section class="about" id="about">

            <img className='about-img' src={require('../../assets/personal_pic_purple.png')} alt=""/>
        

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Frontend Developer!</h3>
            <p>I am a fresh Graduate with a bacholor of Information Technology and a frontend developer and UI UX designer who loves creating beautiful and user-friendly web experiences. I have practicle experience in using HTML, CSS, JavaScript, React, Bootstrap, Figma, to design and develop websites and web applications for various domains. I am passionate about solving problems, learning new things, and collaborating with other developers and designers. I also have a keen eye for design and get inspired by art, animation. I am ambitious and always looking for new challenges and opportunities to grow as a professional.</p>
            <a href="#" class="btna">Read More</a>
        </div>
    </section>
    )
  }

export default About