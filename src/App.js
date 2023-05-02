
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import Order from './components/Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.css';

function App() {
  const [cart,setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  function addToCart(product) {
    if(cart.some(item => item.tuoteid === product.tuoteid)) {
      const existingProduct = cart.filter(item => item.tuoteid === product.tuoteid)
      updateAmount(parseInt(existingProduct[0].amount) + 1, product)
    } else {
      product['amount'] = 1
      const newCart = [...cart, product]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      toast.info('Tuote lisätty ostoskoriin!');
    }
  }
  function removeFromCart(product){
    const itemsWithoutRemoved = cart.filter(item => item.tuoteid !== product.tuoteid)
    setCart(itemsWithoutRemoved)
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved))
  }

  function updateAmount(amount, product) {
    product.amount = amount
    const index = cart.findIndex((item => item.tuoteid === product.tuoteid))
    const modifiedCart = Object.assign([...cart],{[index]: product})
    setCart(modifiedCart)
    localStorage.setItem('cart', JSON.stringify(modifiedCart))
  }

  return (
    <div className='app'>
      <Header />
      <Navbar />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuotteet/:tr" element={<Products />} />
          <Route path="/tuote/:tuoteid" element={<Product addToCart={addToCart} />} />
          <Route path="/haku/:searchQuery" element={<Search />} />
          <Route path='/tilaus' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} />} />'
        </Routes>   
      <Footer />
    </div>
  );
}

//testi
export default App;
