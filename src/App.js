
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/tuotteet/:tr" element={<Products />} />
        <Route path="/tuote/:tuoteid" element={<Product />} />
      </Routes>
    </>
    <Footer />
    </>
  );
}

//testi
export default App;
