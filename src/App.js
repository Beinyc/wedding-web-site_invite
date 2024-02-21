import './App.css';
import Bookmark from './components/bookmark/bookmark';
import DressCode from './components/dressCode/dressCode';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Place from './components/place/place';
import Program from './components/program/program';
import Survey from './components/survey/survey';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Program/>
      <Place/>
      <DressCode/>
      <Bookmark/>
      <Survey/>
      <Footer/>
    </div>
  );
}

export default App;
