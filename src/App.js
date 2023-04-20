
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';
import Search from './components/Search';

function App() {
  return (
    <div className='app'>
      <Header />
      <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/tuotteet/:tr" element={<Products />} />
          <Route path="/tuote/:tuoteid" element={<Product />} />
          <Route path="/haku/:searchQuery" element={<Search />} />
        </Routes>   
      <Footer />
    </div>
  );
}

//testi
export default App;
