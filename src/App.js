
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastify.css';
import Account from './components/Account';
import Contact from './components/Contact';
import Admin from './components/Admin';

const URL = './phpbackend/'

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

  function handleLogin(data){
    axios.post(URL + 'Login.php', data)
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
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tuotteet/:tr" element={<Products url={URL}/>} />
          <Route path="/tuote/:tuoteid" element={<Product addToCart={addToCart} url={URL}/>} />
          <Route path="/haku/:searchQuery" element={<Search url={URL}/>} />
          <Route path='/tilaus' element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} url={URL}/>} />
          <Route path='/login' element={<Login handleLogin= {handleLogin} msg={msg} url={URL}/>} />
          <Route path="/signup" element={<Signin url={URL}/>} />
          <Route path="/kayttaja" element={<Account url={URL}/>} />
          <Route path='/admin' element={<Admin url={URL}/>} />
        </Routes>   
      <Footer />
    </div>
  );
}

//testi
export default App;
