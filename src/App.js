import Nav from './components/Nav';
import Loadingscreen from './components/Loadingscreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loadingscreen/>
      <header className="App-header">
        <Nav/>
      </header>
      
    </div>
  );
}

export default App;
