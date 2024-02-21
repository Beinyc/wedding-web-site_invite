import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Place from './components/place/place';
import Program from './components/program/program';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Program/>
      <Place/>
    </div>
  );
}

export default App;
