
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
import Login from './components/Login';
import Signin from './components/Signin';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function App() {
  const [cart,setCart] = useState([]);
  const [userData, setUserData] = useState()
  const [msg, setMsg] = useState("")

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  useEffect(() => {
    console.log(userData)
  }, [userData])

  function addToCart(product) {
    if(cart.some(item => item.tuoteid === product.tuoteid)) {
      const existingProduct = cart.filter(item => item.tuoteid === product.tuoteid)
      updateAmount(parseInt(existingProduct[0].amount) + 1, product)
    } else {
      product['amount'] = 1
      const newCart = [...cart, product]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
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

  function handleLogin(data){
    axios.post('http://localhost:3001/phpbackend/Login.php', data)
    .then(resp => {
        const json = (resp.data)
        setUserData(json)
        if(userData.length > 0){
            sessionStorage.setItem("userData", JSON.stringify(userData))
            window.location.href = "/"
        }
        else{
            setMsg("Käyttäjänimi tai salasana virheellinen")
        }
    })
    .catch(error => {
        setMsg("Kirjautuminen epäonnistui")
    })
}

  return (
    <div className='app'>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuotteet/:tr" element={<Products />} />
          <Route path="/tuote/:tuoteid" element={<Product addToCart={addToCart} />} />
          <Route path="/haku/:searchQuery" element={<Search />} />
          <Route path='/tilaus' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} />} />
          <Route path='/login' element={<Login handleLogin= {handleLogin} msg={msg}/>} />
          <Route path="/signup" element={<Signin />} />
        </Routes>   
      <Footer />
    </div>
  );
}

//testi
export default App;
