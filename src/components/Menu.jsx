import { easeIn, easeInOut } from "framer-motion"
import { useState,useEffect } from "react"
import './Main.scss'


const Menu = (props) => {
  const [drop,setDrop] =  useState(false)
  const {setCurrentDisplay,setColor,color} = props
  
  useEffect(()=>{
    
    // document.querySelector('main').classList.add('dark')
    // document.querySelector('*').animate([{background:color}],{duration: 2000,"timing-function": easeInOut , "fill":"forwards"})
    // document.querySelector('main').animate([{background:color}],{duration: 2000,"timing-function": easeInOut , "fill":"forwards"})
    // console.log(document.querySelectorAll('#change').classList.add('red'))
    // .animate([{background:color}],{duration: 2000,"timing-function": easeInOut , "fill":"forwards"})
    
    Array.from(document.querySelectorAll('*')).forEach(function(element) {
      element.animate([{background:color}],{duration: 1000,"timing-function": easeIn, "fill":"forwards"})
      });
      
  },[color,drop])
  
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
        <div className='Project-Menu '  style={{backgroundColor: `${color}`}}>
          <li onClick={()=>{
            setCurrentDisplay("Story Creator")
            setColor('#1c0e0c')
            }} 
          style={{backgroundColor: `${color}`}}>
            Story Creator</li>
          <li onClick={()=>{
            setCurrentDisplay("Tiny App")
            setColor('#121317')
          }} 
            style={{backgroundColor: `${color}`}}>
              Tiny App</li>
          <li onClick={()=>{
            setCurrentDisplay("Mapping RC Car")
            setColor('#1B190E')
          }} 
            style={{backgroundColor: `${color}`}}>
              Mapping RC car</li>
          </div>}
        <li onClick={()=>{
          setCurrentDisplay("Hobbies")
          setColor('#161811')}} 
          >Hobbies</li>
      </ul>
    </div>
  )
}

export default Menu