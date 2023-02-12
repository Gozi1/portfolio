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
    const randomNum =  Math.round(Math.random() * (6 - 1)) + 1;
    const colors = ['#160C28','#4E1404','#1B190E','#121317','#1c0e0c','#252555']
    setColor(colors[randomNum-1]); 
    console.log(color)
  }
  useEffect(()=>{
    document.querySelector('*').style.backgroundColor = color
  },[])
  return (
    <div className="App " >
      <Loadingscreen/>
      <main >
        <Nav setCurrentDisplay = {setCurrentDisplay} changeColor ={changeColor}/>
        <div className="content-div " >
        {currentDisplay === 'Contact'? <Contact/>:<Displaytemplate displayObj = {data[currentDisplay]} color ={color}/>}
        
        <Menu setCurrentDisplay = {setCurrentDisplay} changeColor ={changeColor} color={color}/>
        </div>
        </main> 
        <footer>© Ngozi Nwabiani 2023</footer>
    </div>
  );
}

export default App;
