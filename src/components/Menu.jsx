import { useState } from "react"
import './Main.scss'


const Menu = (props) => {
  const [drop,setDrop] =  useState(false)
  const {setCurrentDisplay} = props
  // const projectClass =()=>{
  //   (drop ? 'Project-Menu.active': 'Project-Menu')}
  return (
    <div className='Menu'>
      <ul>
        <li onClick={()=>setCurrentDisplay("About")}>About</li>
        <li onClick={()=>setDrop(!drop)}>Projects
          </li>
          {drop && 
        <div className='Project-Menu'>
          <li onClick={()=>setCurrentDisplay("Story Creator")}>Story Creator</li>
          <li onClick={()=>setCurrentDisplay("Tiny App")}>Tiny App</li>
          <li onClick={()=>setCurrentDisplay("Mapping RC Car")}>Mapping RC car</li>
          </div>}
        <li onClick={()=>setCurrentDisplay("Hobbies")} >Hobbies</li>
      </ul>
    </div>
  )
}

export default Menu