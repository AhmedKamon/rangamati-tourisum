import { lazy, Suspense } from 'react';
import './App.css';
// import About from './Components/About';
// import Book from './Components/Book.jsx';
// import Featchers from './Components/Featchers';
// import Guides from './Components/Guides';
// import Header from './Components/Header';
// import Tours from './Components/Tours';
import './sass/main.scss'
const About = lazy(() => import("./Components/About"));
const Book = lazy(() => import("./Components/Book"));
const Featchers = lazy(() => import("./Components/Featchers"));
const Guides = lazy(() => import("./Components/Guides"));
const Header = lazy(() => import("./Components/Header"));
const Tours = lazy(() => import("./Components/Tours"));


function App() {
  return (
    <>
    <Suspense fallback={<p>Loading page...</p>}>
    <Header/>
    <About/>
    <Featchers/>
    <Tours/>
    <Guides/>
    <Book/>
    </Suspense>
    </>
  );
}

export default App;
