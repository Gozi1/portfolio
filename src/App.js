import Nav from './components/Nav';
import Menu from './components/Menu';
import Displaytemplate from './components/Displaytemplate';
import Loadingscreen from './components/Loadingscreen';
import './App.css';
import data from './data';
import { useState } from 'react';

function App() {
  const [currentDisplay,setCurrentDisplay] =  useState("About");
  
  return (
    <div className="App">
      {/* <Loadingscreen/> */}
      <main >
        <Nav/>
        <div className="content-div">
        <Displaytemplate displayObj = {data[currentDisplay]}/>
        <Menu setCurrentDisplay = {setCurrentDisplay}/>
        </div>
        </main> 
    </div>
  );
}

export default App;
