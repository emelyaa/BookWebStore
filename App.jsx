import React, { useState, useRef } from 'react';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import RecipeBook from './pages/RecipeBook';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import VerticalNavbar from './components/VerticalNavbar';
import Footer from './components/Footer';
import SubscribeModal from './components/SubscribeModal';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [cart, setCart] = useState([]); 


  const renderPage = () => {
    switch (currentPage) {
      case 'Cart':
        return <Cart cart={cart} setCart={setCart} />;
      case 'RecipeDetails':
        return <RecipeDetails setCurrentPage={setCurrentPage} cart={cart} setCart={setCart} />; /* update both cart and the page */
      case 'RecipeBook':
        return <RecipeBook cart={cart} setCart={setCart} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} cart={cart} />
      <div className="content-wrapper">
        <VerticalNavbar setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
          
          
        </main>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
