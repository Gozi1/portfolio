import { easeInOut } from 'framer-motion';
import React from 'react'
import { useEffect } from 'react';
import {BiPaperPlane} from 'react-icons/bi'
const Contact = () => {
  useEffect(() => {
    
    const display = document.querySelector('.contact');
    
    display.style.opacity=0;
    display.animate([{opacity:0},{opacity:1}],{duration: 500,delay:500,"timing-function":easeInOut , "fill":"both"})
    
  },[])
  return (
    <div className='contact'>
    <h1>Contact</h1>
    <p>If you have any other requests or questions, please don’t hesitate to use the form.</p>
    <br/>
    <form className='contact-form' action="https://api.slapform.com/splVOl1Zv" method="post">
           <input type="text"   placeholder="Name" name="name"  required/>
           <input type="email"   placeholder="E-mail" name="slap_replyto"  required/>
           <input type="Subject"   placeholder="Subject" name="slap_subject" required/>
       <textarea rows="5" placeholder="Message" name="message" required></textarea>
       <button id="submit" type="submit" value="SEND">     
           <BiPaperPlane/> 
       </button>
       
       </form> 
       <div className="img-box" style={{  
  backgroundImage: `url(https://media0.giphy.com/media/LZ8d52CxB80RhZvjuP/giphy.gif?cid=ecf05e4702kvrvdza11h653meqnlclkwmr53ji9zqxudem84&rid=giphy.gif&ct=g)`}}  alt ='contact'/>
    </div>
  )
}

export default Contact