import { easeIn, easeInOut } from "framer-motion"
import { useState,useEffect } from "react"
import './Main.scss'


const Menu = (props) => {
  const [drop,setDrop] =  useState(false)
  const {setCurrentDisplay,changeColor,color} = props
  
  useEffect(()=>{ 
    
    document.querySelector('*').animate([{backgroundColor:color}],{duration: 750,"timing-function": easeIn, "fill":"forwards"})
        },[color]);
  
  
  return (
    <div className='Menu ' >
      <ul>
        <li onClick={()=>{
          setCurrentDisplay("About");
          changeColor()
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
            changeColor()
            }} 
          >
            Story Creator</li>
          <li onClick={()=>{
            setCurrentDisplay("Tiny App")
            changeColor()
          }} 
            >
              Tiny App</li>
          <li onClick={()=>{
            setCurrentDisplay("Mapping RC Car")
            changeColor()
          }} 
            >
              Mapping RC car</li>
          </div>}
        <li onClick={()=>{
          setCurrentDisplay("Hobbies")
          changeColor()}} 
          >Hobbies</li>
        <li onClick={()=>{
          setCurrentDisplay("Contact")
          changeColor()}} >Contact</li>
          <li>
            <a href="https://flowcv.com/resume/jbvfgcke9s"
            target="_blank">
              Resume</a></li>

      </ul>
    </div>
  )
}

export default Menu