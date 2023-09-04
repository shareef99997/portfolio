import React from 'react'
import './Experiance.css'

const Experiance=()=> {
    return (
      <section class="Experiance" id="Experiance">
        <h2 class="heading">My <span>Experiances</span></h2>
        <div class="Experiance-container">
            <div class="Experiance-box">
                <i class='bx bx-code-alt'></i>
                <h3>Web Development</h3>
                    <div>
                        <ul>
                        <img className='web-img' src={require('../../assets/html.png')} alt=""/> 
                        <img className='web-img' src={require('../../assets/css.png')} alt=""/> 
                        <img className='web-img' src={require('../../assets/javascript.png')} alt=""/> 
                        <img className='web-img' src={require('../../assets/react.png')} alt=""/> 
                        <img className='web-img' src={require('../../assets/bootstrap.png')} alt=""/> 
                        </ul>
                    </div>
            </div>
            <div class="Experiance-box">
                <i class='bx bx-code-alt'></i>
                <h3>Mobile Apps development</h3>
                    <div>
                        <ul>
                        <img className='app-img' src={require('../../assets/flutter.png')} alt=""/> 
                        <img className='app-img' src={require('../../assets/dart.png')} alt=""/> 
                        <img className='app-img' src={require('../../assets/react.png')} alt=""/> 
                        </ul>
                    </div>
            </div>
            <div class="Experiance-box">
                <i class='bx bx-code-alt'></i>
                <h3>Other</h3>
                    <div>
                        <ul>
                        <img className='other-img' src={require('../../assets/python.png')} alt=""/> 
                        <img className='other-img' src={require('../../assets/firebase.png')} alt=""/> 
                        <img className='other-img' src={require('../../assets/git.png')} alt=""/> 
                        <img className='other-img' src={require('../../assets/github.png')} alt=""/> 
                        </ul>
                    </div>
            </div>
        </div>
    </section>
    )
  }

export default Experiance