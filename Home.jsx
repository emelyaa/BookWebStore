import React, { useState } from 'react';
import './Home.css';
import chewy from '../resources/chewy.jpg';
import cherrytart from '../resources/cherrytart.jpg';
import traditionalPies from '../resources/traditional-pies.jpg';
import cakeBook from '../resources/cake-book.jpg';
import bakingBliss from '../resources/baking-bliss.jpg';
import pieBook from '../resources/pie-book.jpg';
import breadBook from '../resources/bread-book.jpg';

const carouselItems = [
  {
    id: 1,
    image: chewy,
    title: 'Best Big, Yummy, Chewy Chocolate Chip Cookies',
    description: 'Soft chocolate chip cookies: the edible equivalent of a warm hug. Theyre the perfect balance of buttery sweetness and gooey chocolate, with a texture so tender it practically melts in your mouth.  Each bite feels like biting into a little cloud of joy—if clouds were made of butter and chocolate and could be devoured unapologetically in batches of ten.',
  },
  {
    id: 2,
    image: cherrytart,
    title: 'Cherry Custard Tart',
    description: 'Cherry Custard Tarts: the love child of rich, velvety custard and juicy cherries, all snuggled up in a buttery tart shell. These little masterpieces are perfect for when you want your dessert to have both elegance and personality.',
  },
  {
    id: 3,
    image: traditionalPies,
    title: 'Lancashire Butter Pie',
    description: 'Lancashire Butter Pie: the comfort food champion that proves butter really does make everything better. Layers of tender potatoes and sweet onions, all wrapped in a flaky, golden crust.',
  },
];

const verticalImages = [
  {
    id: 1,
    src: cakeBook,
    alt: 'Recipe book about Cakes and Pastries.',
  },
  {
    id: 2,
    src: bakingBliss,
    alt: 'Recipe book about all types of pastries.',
  },
  {
    id: 3,
    src: pieBook,
    alt: 'Recipe book about pies.',
  },
  {
    id: 4,
    src: breadBook,
    alt: 'Recipe book about bread.',
  },
];

const Home = ({ setCurrentPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home">
      <h1>Welcome to the Sweet Spot!</h1>
      <div className='home-container'>

      {/* Carousel*/}
      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button prev">‹</button>
        <div className="carousel-content">
          <img
            src={carouselItems[activeIndex].image}
            alt={carouselItems[activeIndex].title}
            className="carousel-image"
          />
        </div>
        <button onClick={handleNext} className="carousel-button next">›</button>
        <div className="trending-sweets">
          <h2>Trending Sweets</h2>
          <div className="carousel-details">
            <h3>{carouselItems[activeIndex].title}</h3>
            <p>{carouselItems[activeIndex].description}</p>
            <button
              onClick={() => setCurrentPage('RecipeDetails')}
              className="learn-more-button"
            >
              Check out more recipes!
            </button>
          </div>
          
        </div>
      </div>

      {/* Vertical Display Section */}
      <div className="vertical-display">
        <h2>Hot Recipe Books</h2>
        {verticalImages.map((image) => (
          <div
            key={image.id}
            className="vertical-display-item"
            onClick={() => setCurrentPage('RecipeBook')}
          >
            <img src={image.src} alt={image.alt} className="vertical-display-image" />
          </div>
        ))}
      </div>

      {/* Horizontal Display*/}
      <div className="recent-recipes">
      <h2>Recent Recipes</h2>
        <div className="recent-recipes-container">
          {/* Each link sets the current page and scrolls to a specific section */}
          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#coffee-cake');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Coffee Cake
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#layer-cakes');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Banana Layer Cake with Caramel Icing
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#crispy');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Chuck's Protein Bar
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#soft');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Strawberries & Cream Cookies
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#cupcakes');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Vanilla Swiftcakes
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#mini-tarts');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Cherry Custard Tart
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#traditional-pies');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Lancashire Butter Pie
            </a>
          </p>

          <p className="recent-recipe">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeDetails');
                setTimeout(() => {
                  const target = document.querySelector('#salted-desserts');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 0); // Delay for page switch
              }}
            >
              Bourbon Sea Salt Caramels
            </a>
          </p>
          




        </div>
      </div>
      </div>

    </div>
  );
};

export default Home;
