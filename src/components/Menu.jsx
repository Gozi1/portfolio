
import { useState,useEffect } from "react"
import './Main.scss'


const Menu = (props) => {
  const [drop,setDrop] =  useState(false)
  const {setCurrentDisplay,changeColor,color,currentDisplay} = props
  
  useEffect(()=>{ 
    
    document.querySelector('*').animate([{backgroundColor:color}],{duration: 750,"timing-function": 'easeIn', "fill":"forwards"})
    if(window.innerWidth <= 900){
      window.scrollTo({top:0,
                      left:0,
                      behavior: 'smooth'})
    }
        },[color]);
  
  
  return (
    <div className='Menu ' >
      <ul>
        <li 
          onClick={()=>{
          setCurrentDisplay("About");
          if(currentDisplay !== 'About'){
            changeColor()
            }
          }}>
            About
            </li>
        <li 
          onClick={()=>{
          setDrop(!drop)
          }}
          >
            Projects
          </li>
          {drop && 
          <div className='Project-Menu '>
            <li onClick={()=>{
              setCurrentDisplay("Story Creator");
              if(currentDisplay !== 'Story Creator'){
                changeColor()
              }
            }} 
          >
            Story Creator
            </li>
            <li 
              onClick={()=>{
              setCurrentDisplay("Tiny App")
              if(currentDisplay !== 'Tiny App'){
                changeColor()
              }
            }} 
            >
            Tiny App
            </li>
            <li onClick={()=>{
              setCurrentDisplay("Interview Scheduler")
              if(currentDisplay !== 'Interview Scheduler'){
                changeColor()
                }
            }} 
            >
            Interview Scheduler
            </li>
          </div>}

        <li 
          onClick={()=>{
          setCurrentDisplay("Hobbies")
          if(currentDisplay !== 'Hobbies'){
            changeColor()
            }
          }} >
          Hobbies
          </li>
        <li 
          onClick={()=>{
          setCurrentDisplay("Contact")
          if(currentDisplay !== 'Contact'){
            changeColor()
            }
            }}>
            Contact
            </li>
        <li>
          <a href="https://flowcv.com/resume/jbvfgcke9s"
              target="_blank">
              Resume
              </a>
              </li>
      </ul>
    </div>
  )
}

export default Menu