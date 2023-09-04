import React from 'react'
import './Projects.css'

const Projects=()=> {
    return (
      <section class="Projects" id="Projects">
        <h2 class="heading">Latest <span>Projects</span></h2>

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
            {/*/////////////// E-Store ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/estore.jpeg')} alt=""/>
                <div class="Projects-layer">
                    <h4>E-Store</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/html.png')} alt=""/>
                        <img class="tool" src={require('../../assets/css.png')} alt=""/>
                        <img class="tool" src={require('../../assets/javascript.png')} alt=""/>
                    </div>
                    <p>a responsive E-Store design</p>
                    <a href="https://shareef99997.github.io/E-Store/" target="_blank"><i class='bx bx-link-external'></i></a>
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
            {/*/////////////// Youtube Clone ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/youtube.jpeg')} alt=""/>
                <div class="Projects-layer">
                    <h4>Youtube Clone</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/html.png')} alt=""/>
                        <img class="tool" src={require('../../assets/css.png')} alt=""/>
                        <img class="tool" src={require('../../assets/javascript.png')} alt=""/>
                    </div>
                    <p>Humbly My first Project in web development</p>
                    <a href="https://shareef99997.github.io/Youtube-clone/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

        </div>
    </section>
    )
  }

export default Projects