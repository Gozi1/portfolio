import { useState } from "react"
import './Main.scss'


const Menu = () => {
  const [drop,setDrop] =  useState(false)
  // const projectClass =()=>{
  //   (drop ? 'Project-Menu.active': 'Project-Menu')}
  return (
    <div className='Menu'>
      <ul>
        <li>About</li>
        <li onClick={()=>setDrop(!drop)}>Projects
          </li>
          {drop && 
        <ul className='Project-Menu'>
          <li>tiny App</li>
          <li>Rc car</li>
          <li>Tweeter</li>
          </ul>}
        
        <li>Hobbies</li>
      </ul>
    </div>
  )
}

export default Menu