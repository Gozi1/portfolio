import Nav from './components/Nav';
import Menu from './components/Menu';
import Loadingscreen from './components/Loadingscreen';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Loadingscreen/> */}
      <main >
        <Nav/>
        <Menu/>
        </main> 
    </div>
  );
}

export default App;
