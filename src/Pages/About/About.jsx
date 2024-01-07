import React from 'react'
import './About.css'

const About=()=>{
    return (
      <section class="about" id="about">

            <img className='about-img' src={require('../../assets/pp.png')} alt=""/>
        

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Sowftware Developer!</h3>
            <p>Experienced Software Developer specializing in frontend and mobile app development. Known for delivering creative solutions that surpass client expectations. Dedicated to ongoing learning and staying current with emerging technologies. Great Experiance in frontend Development and creating responsive and user freindly web apps and mobile apps.</p>
           
            <a href="#Experiance" class="btn about-btn">Read More</a>
            
        </div>
    </section>
    )
  }

export default About