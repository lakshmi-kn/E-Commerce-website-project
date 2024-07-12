
import { Header } from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';
import { ShopContextProvider } from './context/shop-context';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop/:categoryId' element={<Shop/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
