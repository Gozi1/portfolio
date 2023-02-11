import { easeIn, easeInOut } from "framer-motion"
import { useState,useEffect } from "react"
import './Main.scss'


const Menu = (props) => {
  const [drop,setDrop] =  useState(false)
  const {setCurrentDisplay,setColor,color} = props
  
  useEffect(()=>{ 
    
    document.querySelector('*').animate([{backgroundColor:color}],{duration: 750,"timing-function": easeIn, "fill":"forwards"})
        },[color]);
  
  
  return (
    <div className='Menu ' >
      <ul>
        <li onClick={()=>{
          setCurrentDisplay("About");
          setColor('#252555')
          }}>
            About
            </li>
        <li onClick={()=>{
          setDrop(!drop)
          }}>Projects
          </li>
          {drop && 
        <div className='Project-Menu '  >
          <li onClick={()=>{
            setCurrentDisplay("Story Creator")
            setColor('#1c0e0c')
            }} 
          >
            Story Creator</li>
          <li onClick={()=>{
            setCurrentDisplay("Tiny App")
            setColor('#121317')
          }} 
            >
              Tiny App</li>
          <li onClick={()=>{
            setCurrentDisplay("Mapping RC Car")
            setColor('#1B190E')
          }} 
            >
              Mapping RC car</li>
          </div>}
        <li onClick={()=>{
          setCurrentDisplay("Hobbies")
          setColor('#79835D')}} 
          >Hobbies</li>
        <li onClick={()=>{
          setCurrentDisplay("Contact")
          setColor('#160C28')}} >Contact</li>
          <li>
            <a href="https://flowcv.com/resume/jbvfgcke9s"
            target="_blank">
              Resume</a></li>

      </ul>
    </div>
  )
}

export default Menu