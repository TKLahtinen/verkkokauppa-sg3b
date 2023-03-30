
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Tennarit from './components/Tennarit';
import Kengat from './components/Kengat';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <div className="container d-flex">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Tennarit" element={<Tennarit />} />
        <Route path="/Kengat" element={<Kengat />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

//testi
export default App;
