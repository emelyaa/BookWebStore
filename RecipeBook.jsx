import React, { useState } from 'react';
import './RecipeBook.css';
import cakeBook from '../resources/cake-book.jpg';
import bakingBliss from '../resources/baking-bliss.jpg';
import pieBook from '../resources/pie-book.jpg';
import breadBook from '../resources/bread-book.jpg';

const recipeBooks = [
  {
    id: 1,
    title: 'The Timeless Craft of Cakes & Pastries: A Journey Through Sweet Elegance',
    category: 'cakes',
    image: cakeBook,
    description: 'From delicate layers of sponge to the perfect swirl of frosting, discover how cakes and pastries have been stealing hearts and sweetening memories for generations.',
    ariaLabel: 'The Timeless Craft of Cakes & Pastries. Explore recipes for cakes and pastries with timeless elegance.',
  },
  
  {
    id: 2,
    title: 'Baking Bliss',
    category: 'cookies',
    image: bakingBliss,
    description: 'Delightful recipes for bars, cookies, and everything in between.',
    ariaLabel: 'Baking Bliss. A collection of delightful recipes for bars, cookies, and more.',
  },
  {
    id: 3,
    title: 'Everything You Need to Know About the World of Pies & Tarts',
    category: 'pies',
    image: pieBook,
    description: 'Dive fork-first into a world of buttery crusts, fruity fillings, and flaky perfection. Warning: reading may cause cravings.',
    ariaLabel: 'Everything You Need to Know About the World of Pies & Tarts. Discover the art of pies and tarts with buttery crusts and fruity fillings.',
  },
  {
    id: 4,
    title: 'Savor the Art of Desserts While Falling in Love with Loaves',
    category: 'savory',
    image: breadBook,
    description: 'Where sweetness meets comfort. Explore desserts that bring joy to every bite and loaves that make your kitchen smell like home.',
    ariaLabel: 'Savor the Art of Desserts While Falling in Love with Loaves. Enjoy sweet desserts and comforting loaves.',
  },
];

const RecipeBook = ({ cart, setCart }) => {
  const [message, setMessage] = useState('');
  const [quantities, setQuantities] = useState(
    recipeBooks.reduce((acc, book) => ({ ...acc, [book.id]: 1 }), {})
  );
  const [selectedCategory, setSelectedCategory] = useState('all'); // Track selected category

  const handleQuantityChange = (id, value) => {
    if (value > 0) {
      setQuantities((prev) => ({ ...prev, [id]: value }));
    }
  };

  const addToCart = (book) => {
    const quantity = quantities[book.id];
    const existingItem = cart.find((item) => item.id === book.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity }]);
    }

    setMessage(`${quantity} ${book.title}(s) added to the cart!`);
    setTimeout(() => setMessage(''), 3000); // Clears message after 3 seconds
  };

 /* Filter to filter through all four books */
  const filteredBooks =
    selectedCategory === 'all'
      ? recipeBooks
      : recipeBooks.filter((book) => book.category === selectedCategory);

  return (
    <div className="recipe-book">
      <h1>Our Recipe Books</h1>
      {message && <p className="message">{message}</p>}

      <div className="filter-buttons">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'cakes' ? 'active' : ''}
          onClick={() => setSelectedCategory('cakes')}
        >
          Cakes
        </button>
        <button
          className={selectedCategory === 'cookies' ? 'active' : ''}
          onClick={() => setSelectedCategory('cookies')}
        >
          Cookies
        </button>
        <button
          className={selectedCategory === 'pies' ? 'active' : ''}
          onClick={() => setSelectedCategory('pies')}
        >
          Pies
        </button>
        <button
          className={selectedCategory === 'savory' ? 'active' : ''}
          onClick={() => setSelectedCategory('savory')}
        >
          Savory Desserts
        </button>
      </div>

      {/* Recipe Book Cards */}
      <div className="recipe-book-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="recipe-book-card">
            <img src={book.image} alt={book.title} className="recipe-book-image" />
            <h2 className="recipe-book-title">{book.title}</h2>
            <p className="recipe-book-description">{book.description}</p>
            <div className="quantity-input">
              <label htmlFor={`quantity-${book.id}`}>Quantity:</label>
              <input
                id={`quantity-${book.id}`}
                type="number"
                min="1"
                value={quantities[book.id]}
                onChange={(e) => handleQuantityChange(book.id, parseInt(e.target.value))}
              />
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(book)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeBook;
