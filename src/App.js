import './App.css';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About'
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
