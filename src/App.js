import { lazy, Suspense } from 'react';
import './App.css';
import Loading from './Components/Loading';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import About from './Components/About';
// import Book from './Components/Book.jsx';
// import Featchers from './Components/Featchers';
// import Guides from './Components/Guides';
// import Header from './Components/Header';
// import Tours from './Components/Tours';
import './sass/main.scss';

const Navbar = lazy(() => import("./Components/Navbar"));
const About = lazy(() => import("./Components/About"));
const Book = lazy(() => import("./Components/Book"));
const Featchers = lazy(() => import("./Components/Featchers"));
const Guides = lazy(() => import("./Components/Guides"));
const Header = lazy(() => import("./Components/Header"));
const Tours = lazy(() => import("./Components/Tours"));
const Footer = lazy(() => import("./Components/Footer"));


function App() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
    <Navbar/>
    <Header/>
    <About/>
    <Featchers/>
    <Tours/>
    <Guides/>
    <Book/>
    <Footer/>
    </Suspense>
    </>
  );
}

export default App;
