import Nav from './components/Nav';
import Menu from './components/Menu';
import Displaytemplate from './components/Displaytemplate';
import Loadingscreen from './components/Loadingscreen';
import './App.css';
import data from './data';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';

function App() {
  const [currentDisplay,setCurrentDisplay] =  useState("About");
  const [color,setColor] = useState('#252555')
  function changeColor(){
    //function to randomize the color and make sure the previos color is not the new random number.
    const colors = ['#160C28','#2F4B39','#1B190E','#121317','#1c0e0c','#252555']
    const randomNum =()=>{ 
      
      let randomNumber = Math.floor(Math.random() * 5);
      let prevNumber = colors.indexOf(color);
      while (randomNumber === prevNumber) {
      randomNumber = Math.floor(Math.random() * 6);
    }
    return randomNumber;
    }
    setColor(colors[randomNum()]); 
  }
    
  useEffect(()=>{
    document.querySelector('*').style.backgroundColor = color
  },[])
  return (
    <div className="App " >
      <Loadingscreen/>
      <main >
        <Nav currentDisplay = 
        {currentDisplay}  
        setCurrentDisplay = {setCurrentDisplay} 
        changeColor ={changeColor}/>
        <div className="content-div " >
        {
        currentDisplay === 'Contact'
        ? 
        <Contact/>
        :<Displaytemplate 
        displayObj = {data[currentDisplay]} 
        color ={color}/>}
        <Menu 
        currentDisplay = {currentDisplay} 
        setCurrentDisplay = {setCurrentDisplay} 
        changeColor ={changeColor} 
        color={color}/>
        </div>
        </main> 
        <footer>© Ngozi Nwabiani 2023</footer>
    </div>
  );
}

export default App;
