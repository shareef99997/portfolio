import React from 'react'
import './Projects.css'

const Projects=()=> {
    return (
      <section class="Projects" id="Projects">
        <h2 class="heading">Latest <span>Projects</span></h2>
        <h3 class="Projects-Category">WebSites 🖥️</h3>
        <div class="Projects-container">
            {/*/////////////// QPT ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/qpt.jpeg')} alt=""/>
                <div class="Projects-layer">
                    <h4>QPT</h4>
                    <div class ="l">
                    <img class="tool" src={require('../../assets/react.png')} alt=""/>
                    </div>
                    <p>AI Services Frontend design</p>
                    <a href="https://shareef99997.github.io/QPT/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            {/*/////////////// Q-Bank ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/qbank.jpeg')} alt=""/>
                <div class="Projects-layer">
                    <h4>Q-Bank</h4>
                    <div className='l'><img class="tool" src={require('../../assets/react.png')} alt=""/></div>
                    <p>Credit Card Services Company Frontend design</p>
                    <a href="https://qbankq.netlify.app/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            {/*/////////////// Info-App ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/info.jpeg')} alt=""/>
                <div class="Projects-layer">
                    <h4>Info-App</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/html.png')} alt=""/>
                        <img class="tool" src={require('../../assets/css.png')} alt=""/>
                        <img class="tool" src={require('../../assets/javascript.png')} alt=""/>
                    </div>
                    <p>multible small apps using Api</p>
                    <a href="https://shareef99997.github.io/Info_App/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
        <div class ="line"></div>
        <h3 class="Projects-Category">Mobile Apps 📱</h3>
        <div class="Projects-container">
            {/*/////////////// Drip ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/Drip.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>Drip</h4>
                    <div class="l">
                        <img class="tool" src={require('../../assets/flutter.png')} alt=""/>
                        <img class="tool" src={require('../../assets/firebase.png')} alt=""/> 
                    </div>

                    <p>an E-Commerce App for cloathing and Electronics</p>
                    <a href="https://play.google.com/store/apps/details?id=com.ShareefDev" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>            
            {/*/////////////// Semsar ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/Semsar.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>Semsar</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/flutter.png')} alt=""/>
                        <img class="tool" src={require('../../assets/firebase.png')} alt=""/>
                    </div>
                    <p>a complete mobile app for house services</p>
                    <a href="https://play.google.com/store/apps/details?id=com.shareef.Semsar&pli=1" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            {/*/////////////// TooDoo ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/TooDoo.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>TooDoo</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/flutter.png')} alt=""/>
                        <img class="tool" src={require('../../assets/sql.png')} alt=""/>
                    </div>
                    <p> A Taskes app that save and display tasks as requested</p>
                    <a href="https://play.google.com/store/apps/details?id=shareefdev.TooDoo" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

        </div>
    </section>
    )
  }

export default Projects