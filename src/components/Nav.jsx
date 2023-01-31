import React from 'react'
import { ImGithub,ImInstagram,ImLinkedin2,ImMenu,ImCross} from "react-icons/im";
import { useState } from 'react';
import './Nav.scss'

const Nav = () => {
  function addshake() {
    document.querySelector('.logo').classList.add('shake');
  }

  function removeshake() {
    document.querySelector('.logo').classList.remove('shake');
  }


  return (
                <div className='Nav'>
              <svg className='logo ' xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none" 
              onMouseOver ={addshake} onAnimationEnd ={removeshake}>
            <g filter="url(#filter0_d_0_1)">
            <path 
              d="M31 87.25V26H48.5V34.75H57.25V43.5H66V52.25H74.75V26H92.25V87.25H74.75V69.75H66V61H57.25V52.25H48.5V87.25H31Z" fill="#0075FF"/>
            </g>
            <g filter="url(#filter1_d_0_1)">
            <circle 


            cx="60" cy="56" r="53" stroke="#0075FF" strokeWidth="5"/>
            </g>
            <defs>
            <filter id="filter0_d_0_1" x="27" y="26" width="69.25" height="69.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
            <filter id="filter1_d_0_1" x="0.5" y="0.5" width="119" height="119" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
</defs>
</svg>
  
    <ul className = 'socials'>
          <li className='selected'>
            <a href="https://www.instagram.com/haimgod_/">
              <ImInstagram/>
              </a></li>
          <li>
            <a href="https://www.linkedin.com/in/ngozi-nwabiani-13652a217/">
              <ImLinkedin2/>
              </a></li>
          <li>
            <a href="https://github.com/Gozi1">
              <ImGithub/>
              </a></li>
        </ul>
  

    </div>
  )
}

export default Nav