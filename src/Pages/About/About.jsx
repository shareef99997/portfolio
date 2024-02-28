import React from 'react'
import './About.css'

const About=()=>{
    return (
      <section class="about" id="about">

            <img className='about-img' src={require('../../assets/pp.png')} alt=""/>
        

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Sowftware Developer / Data Analyst</h3>
            <p>I'm an experienced Software Developer and Data Analyst specializing in frontend and mobile app development. I'm known for delivering creative solutions that impress clients. I'm dedicated to learning and staying up-to-date with new technologies. I excel in frontend development, creating user-friendly web and mobile apps. Plus, I'm skilled in data analysis, using insights to improve development strategies and user experiences.</p>
           
            <a href="#Experiance" class="btn about-btn">Read More</a>
            
        </div>
    </section>
    )
  }

export default About