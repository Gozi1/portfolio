import Nav from './components/Nav';
import Loadingscreen from './components/Loadingscreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loadingscreen/>
      <main >
        <Nav/>
        </main>
    </div>
  );
}

export default App;
