import './App.css';
import About from './Components/About';
import Book from './Components/Book.jsx';
import Featchers from './Components/Featchers';
import Guides from './Components/Guides';
import Header from './Components/Header';
import Tours from './Components/Tours';
import './sass/main.scss'


function App() {
  return (
    <>
    <Header/>
    <About/>
    <Featchers/>
    <Tours/>
    <Guides/>
    <Book/>
    </>
  );
}

export default App;
