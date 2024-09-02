import React from 'react';
import Typed from 'react-typed';
import './Home.css';
const Home =()=> {
    return (
      <section class="home" id="home">

        <div className='img-container pc'>
         <div className="home-img">
          <img src={require('../../assets/dev.png')} alt="" />
         </div> 
         <p>Create responsive websites and mobile apps with modern designs. 🌐 </p>
        </div>

        <div class="home-content">
          <h3>Hello 👋, I'm </h3>
            <h1>Shareef Ali</h1>
            
            <h3>And I'm a 
              <span class="multiple-text"> &nbsp;
              <Typed strings={['Software Developer','Data Analyst']}
              typeSpeed={20}
              backSpeed={20}
              backDelay={2000}

              loop={true}
            />
            </span></h3>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/shareef-ali" target="_blank"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/shareef99997" target="_blank"><i class='bx bxl-github'></i></a>
                <a href="https://twitter.com/SHIFO_99997" target="_blank"><i class='bx bxl-twitter'></i></a>
                <a href="mailto:shareef.99997@gmail.com" target="_blank"><i class='bx bxl-gmail'></i></a>
                <a href="https://api.whatsapp.com/send?phone=966582635947&text=Hello%20Shareef%20%F0%9F%91%8B" target="_blank"><i class='bx bxl-whatsapp'></i></a>
            </div>
            <a href={require('../../assets/Shareef-Huzaifa-Resume.pdf' )} 
            download="Shareef's_CV" 
            class="btn">Download CV</a>
        </div>
        
        <div className='img-container phone'>
         <div className="home-img">
          <img src={require('../../assets/dev.png')} alt="" />
         </div> 
         <p>Create responsive websites and mobile apps with modern designs. 🌐 </p>
        </div>

        <div className='img-container'>
          <div class="home-img">
              <img src={require('../../assets/data-analyst.png')} alt="" />
          </div>
          <p>
          extracting insights from data, creating concise reports, and informing strategic choices. 📊
          </p>
        </div>
      
  </section>
    )
  }

export default Home