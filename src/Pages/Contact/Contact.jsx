import {React ,useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
 
const Contact=()=>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('shareef_portfolio', 'template_9lsgkx7', form.current, 'VONWVF5lDExBpxU1f')
      .then((result) => {
          console.log(result.text);
          alert('message sent seccessfully 😄');
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
      <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>
        <p>this message will be sent to my personal email</p>
        <form ref={form} onSubmit={sendEmail}>
            <div class="input-box">
                <input type="text" name='user_name' placeholder="Full Name"/>
                <input type="email" name='user_email' placeholder="Email Address"/>
            </div>
            <div class="input-box">
                <input type="number" name='user_phone' placeholder="Mobile Number"/>
                <input type="text" name='subject' placeholder="Email Subject"/>
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn"/>
            </form>
    </section>
    )
  }

export default Contact