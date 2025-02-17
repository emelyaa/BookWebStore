import React from 'react';
import './Navbar.css';
import logo from '../resources/logo.jpg';



const Navbar = ({ setCurrentPage, cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setCurrentPage('Home')}>
        <img
          src={logo}
          alt="Logo of two strawberries on blue background to match header"
          className="logo-image"
        />
      </div>
      <ul className="navbar-list">
        <li
          className="navbar-item"
          onClick={() => setCurrentPage('Home')}
        >
          <a href="#" className="navbar-link">Home</a>
        </li>
        <li
          className="navbar-item hide-mobile"
          onClick={() => setCurrentPage('RecipeDetails')}
        >
          <a href="#" className="navbar-link">All Recipes</a>
        </li>
        <li
          className="navbar-item hide-mobile"
          onClick={() => setCurrentPage('RecipeBook')}
        >
          <a href="#" className="navbar-link">Recipe Books</a>
        </li>
        <li
          className="navbar-item"
          onClick={() => setCurrentPage('Cart')}
        >
          <a href="#" className="navbar-link">
            Cart ({cart.length})
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
