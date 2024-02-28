import React from 'react'
import './Projects.css'

const Projects=()=> {
    return (
      <section class="Projects" id="Projects">
        <h2 class="heading">Latest <span>Projects</span></h2>


        <h3 class="Projects-Category">Data Analysis 🔢</h3>
        <div class="Projects-container">
            {/*/////////////// bikes ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/Bikes.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>Bikes Sales Dashboard</h4>
                    <div class ="l">
                    <img class="tool" src={require('../../assets/excel.png')} alt=""/>
                    </div>
                    <p>Cleaning and organizing Big Data and visualization using Excel</p>
                    <a href={require('../../assets/Excel_Project_Dataset.xlsx' )} download={'Bikes Sales'}><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            {/*/////////////// Data Survay ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/power.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>Data Professional Survey</h4>
                    <div className='l'><img class="tool" src={require('../../assets/bi.png')} alt=""/>
                    <img class="tool" src={require('../../assets/excel.png')} alt=""/></div>
                    <p>visualizing and analyzing of Data Professional Survey </p>
                    <a href={require('../../assets/Power-Bi.zip' )} download={'Data Survey'}><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            {/*/////////////// Covid ///////////////*/}
            <div class="Projects-box">
                <img className='project-img' src={require('../../assets/covids.png')} alt=""/>
                <div class="Projects-layer">
                    <h4>Covid-19</h4>
                    <div className='l'>
                        <img class="tool" src={require('../../assets/sql.png')} alt=""/>
                    </div>
                    <p>Cleaning and organizing Big Data using SQL</p>
                    <a href={require('../../assets/COVID.zip' )} download={'Covid'}><i class='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
        <div class ="line"></div>

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