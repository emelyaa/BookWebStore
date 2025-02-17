import React, { useState } from 'react';
import './Cart.css';

function Cart({ cart, setCart }) {

  /* Item Removal one or all */
  const removeOneFromCart = (bookId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === bookId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter((item) => item.quantity > 0); // Remove item if quantity drops to 0
    setCart(updatedCart);
  };

  const removeAllFromCart = (bookId) => {
    setCart(cart.filter((item) => item.id !== bookId));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map((book) => (
            <div key={book.id} className="cart-item">
              <img src={book.image} alt={book.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{book.title}</h2>
                <p className="cart-item-description">{book.description}</p>
                <p className="cart-item-quantity">Quantity: {book.quantity}</p>
                <div className="cart-item-buttons" alt="Remove buttons">
                  <button
                    className="remove-one-button" alt="Remove one button"
                    onClick={() => removeOneFromCart(book.id)}
                  >
                    Remove One
                  </button>
                  <button
                    className="remove-all-button" alt="Remove all button"
                    onClick={() => removeAllFromCart(book.id)}
                  >
                    Remove All
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
