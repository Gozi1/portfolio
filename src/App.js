import Nav from './components/Nav';
import Menu from './components/Menu';
import Displaytemplate from './components/Displaytemplate';
import Loadingscreen from './components/Loadingscreen';
import './App.css';
import data from './data';
import { useContext, useState } from 'react';

function App() {
  const [currentDisplay,setCurrentDisplay] =  useState("About");
  const [color,setColor] = useState('#252555')
  // useContext
  return (
    <div className="App " id="change">
      {/* <Loadingscreen/> */}
      <main >
        <Nav/>
        <div className="content-div " id="change">
        <Displaytemplate displayObj = {data[currentDisplay]} color ={color}/>
        <Menu setCurrentDisplay = {setCurrentDisplay} setColor={setColor} color={color}/>
        </div>
        </main> 
    </div>
  );
}

export default App;
