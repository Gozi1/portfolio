import Nav from './components/Nav';
import Menu from './components/Menu';
import Displaytemplate from './components/Displaytemplate';
import Loadingscreen from './components/Loadingscreen';
import './App.css';
import data from './data';
import { useEffect, useState } from 'react';

function App() {
  const [currentDisplay,setCurrentDisplay] =  useState("About");
  const [color,setColor] = useState('#252555')
  useEffect(()=>{
    document.querySelector('*').style.backgroundColor = color
  },[])
  return (
    <div className="App " id="change">
      {/* <Loadingscreen/> */}
      <main >
        <Nav setCurrentDisplay = {setCurrentDisplay}/>
        <div className="content-div " id="change">
        <Displaytemplate displayObj = {data[currentDisplay]} color ={color}/>
        <Menu setCurrentDisplay = {setCurrentDisplay} setColor={setColor} color={color}/>
        </div>
        </main> 
    </div>
  );
}

export default App;
