import React, { useEffect, useRef } from 'react';
import './RecipeDetails.css';
import SubscribeModal from '../components/SubscribeModal';
import soft from '../resources/soft.jpg'; // Importing pictures for all the recipes
import layerCakes from '../resources/layer-cakes.jpg';
import rollCakes from '../resources/roll-cakes.jpg';
import cupcakes from '../resources/cupcakes.jpg';
import chewy from '../resources/chewy.jpg';
import crispy from '../resources/crispy.jpg';
import cherrytart from '../resources/cherrytart.jpg';
import galettes from '../resources/galettes.jpg';
import traditionalPies from '../resources/traditional-pies.jpg';
import muffins from '../resources/muffins.jpg';
import saltedDesserts from '../resources/salted-desserts.jpg';
import coffeeCake from '../resources/coffee-cake.jpg';


const RecipeDetails = ({ setCurrentPage }) => {
  const subscribeModalRef = useRef(); 
  return (
    <div className="recipe-details">
      <div className="recipe-category">
        <h1 id="cakes-and-pastries">
          Cakes & Pastries
          </h1>
          <div className="recipe-steps">
            <h2 id="layer-cakes">Banana Layer Cake with Caramel Icing</h2>
            <p>A luscious banana layer cake topped with rich caramel icing—perfect for special celebrations.</p>
            <img src={layerCakes} alt="Banana cake and associated ingredients" aria-labelledby="layer-cakes"/>
            <p>
              <strong>Directions:</strong>
              <ol>
                <li>Prepare batter and bake in two 9-inch pans at 350°F for 25 minutes.</li>
                <li>Make caramel icing, cool slightly, and frost the layers while warm.</li>
                <li>Let the icing set, slice, and serve.</li>
                </ol>
            </p>
            <p>
              Love this recipe?{' '}
              <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
              >
                Subscribe for more!
                </a>
                </p>
          </div>  
            
        
        <div className="recipe-steps">
          <h2 id="roll-cakes">Swiss Roll Cake</h2>
          <p>Roll Cakes are an elegant dessert perfect for any occasion. Learn about different types of roll cakes and how to prepare them at home.</p>
          <img src={rollCakes} alt="Cinnamon Roll cake" aria-labelledby="roll-cakes"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Mix wet and dry ingredients, fold in chocolate chips.</li>
              <li>Scoop dough onto baking sheet, bake at 375°F for 10-12 minutes.</li>
              <li>Cool slightly and enjoy warm!</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        
        </div>
        
        <div className="recipe-steps">
        <h2 id="cupcakes">Vanilla Swiftcakes</h2>
          <p>We know it’s hard to find a really good, classic cupcake recipe, so I got you covered. </p>
          <img src={cupcakes} alt="Tray of vanilla cupcakes" aria-labelledby="Cupcakes"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Mix ingredients, pour batter into cupcake liners, and bake at 350°F for 20 minutes.</li>
              <li>Prepare buttercream frosting and pipe onto cooled cupcakes.</li>
              <li>Decorate with sprinkles or toppings of your choice.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
          <p>
             {/*Link to buy the recipe book */}
          <buy-book-link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeBook'); 
              }}
            >
              (Buy the Recipe Book for the full list of ingredients!)
            </a>
          </buy-book-link>
          </p>
          
        </div>


          </div>
      
              {/*new cat */}
      <div className="recipe-category">
        <h1 id="cookies-and-bars">Cookies & Bars</h1>
        <div className="recipe-steps">
        <h2 id="chewy">Best Big, Yummy, Chewy Chocolate Chip Cookie</h2>
          <p>Soft, chewy chocolate chip cookies that are a classic favorite.</p>
            <img src={chewy} alt="Melted chocolate chip cookie" aria-labelledby="chewy"/>
            <p>
              <strong>Directions:</strong>
              <ol>
                <li>Mix wet and dry ingredients, fold in chocolate chips.</li>
                <li>Scoop dough onto baking sheet, bake at 375°F for 10-12 minutes.</li>
                <li>Cool slightly and enjoy warm!</li>
              </ol>
            </p>
            <p>
              Want more recipes like this?{' '}
              <a
                href="#"
                onClick={() => subscribeModalRef.current.toggleModal()}
              >
                Subscribe here!
              </a>
            </p>
        </div>
        

        <div className="recipe-steps">
        <h2 id="crispy">Chuck's Protein Bar</h2>
        <p>Crunchy, protein-packed bars for a healthy and filling snack.</p>
          <img src={crispy} alt="Protein bars" aria-labelledby="crispy"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Combine oats, nuts, and honey; press into a baking pan.</li>
              <li>Bake at 300°F for 20 minutes, then cool completely.</li>
              <li>Cut into bars and store in an airtight container.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        </div>

        <div className="recipe-steps">
        <h2 id="soft">Strawberries & Cream Cookies</h2>
        <p>Delightfully soft cookies with chunks of strawberries and a creamy glaze.</p>
          <img src={soft} alt="Bowl of strawberries and cream" aria-labelledby="softs"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Mix butter, sugar, and strawberries into a creamy dough.</li>
              <li>Scoop onto a tray, bake at 350°F for 12 minutes.</li>
              <li>Drizzle with glaze and let set before serving.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>

          <p>
             {/*Link to buy the recipe book */}
          <buy-book-link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeBook'); 
              }}
            >
              (Buy the Recipe Book for the full list of ingredients!)
            </a>
          </buy-book-link>
       </p>
          
        </div>
        
       </div>

       {/*new cat */}
       <div className="recipe-category">
        <h1 id="pies-and-tarts">Pies & Tarts</h1>
        <div className="recipe-steps">
        <h2 id="mini-tarts">Cherry Custard Tart</h2>
        <p>Mini custard tarts topped with fresh cherries—perfect for parties.</p>
          <img src={cherrytart} alt="Mini Tarts" />
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Blind bake tart crusts at 350°F for 15 minutes.</li>
              <li>Fill with custard and top with fresh cherries.</li>
              <li>Chill for 1 hour before serving.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        </div>

        <div className="recipe-steps">
	<h2 id="galettes">Blueberry Hazelnut Galette</h2>
        <p>Rustic galette filled with blueberries and a nutty hazelnut crust.</p>
          <img src={galettes} alt="Bowl of crushed blueberries" aria-labelledby="galettes"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Prepare crust and chill. Roll out, fill with blueberry mixture.</li>
              <li>Fold edges of the crust over filling and bake at 375°F for 25 minutes.</li>
              <li>Let cool slightly before slicing.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        </div>

        
        <div className="recipe-steps">
        <h2 id="traditional-pies">Lancashire Butter Pie</h2>
        <p>Hearty savory pie with layers of potato, onion, and butter.</p>
          <img src={traditionalPies} alt="Pie on a cutting board" aria-labelledby="traditional-pies"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Layer potatoes and onions in a pie crust, add butter.</li>
              <li>Top with crust and bake at 400°F for 30-35 minutes.</li>
              <li>Cool slightly before serving.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
          <p>
             {/*Link to buy the recipe book */}
          <buy-book-link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeBook'); 
              }}
            >
              (Buy the Recipe Book for the full list of ingredients!)
            </a>
          </buy-book-link>
          </p>
        
        </div>
       
      </div>


      {/*new cat */}

      <div className="recipe-category">
        <h1 id="savory-desserts-and-loaves">Savory Desserts & Sweet Loaves</h1>
        <div className="recipe-steps">
        <h2 id="muffins">Almond Flour Muffins</h2>
        <p>Moist and fluffy muffins made with almond flour—perfect for breakfast.</p>
          <img src={muffins} alt="Almond Muffins on a table" aria-labelledby="muffins" />
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Mix almond flour, eggs, and sweetener until smooth.</li>
              <li>Pour batter into muffin tins, bake at 350°F for 18 minutes.</li>
              <li>Cool and enjoy with your favorite spread.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        </div>


        <div className="recipe-steps">
        <h2 id="salted-desserts">Bourbon Sea Salt Caramels</h2>
        <p>Rich and buttery caramels with a hint of bourbon and a sprinkle of sea salt.</p>
          <img src={saltedDesserts} alt="Bowl of caramel" aria-labelledby="salted-desserts"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Cook sugar, butter, and cream to 245°F on a candy thermometer.</li>
              <li>Pour into a greased pan, sprinkle with sea salt, and let set.</li>
              <li>Cut into squares and wrap in parchment paper.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
        </div>

        <div className="recipe-steps">
        <h2 id="coffee-cake">Cinnamon Coffee Cake with Streusel Crumb</h2>
        <p>Moist coffee cake topped with a sweet cinnamon streusel crumb.</p>
          <img src={coffeeCake} alt="Coffee Cake" aria-labelledby="coffee-cake"/>
          <p>
            <strong>Directions:</strong>
            <ol>
              <li>Prepare batter, pour into a greased pan, and top with streusel.</li>
              <li>Bake at 350°F for 30-35 minutes, until a toothpick comes out clean.</li>
              <li>Cool slightly, slice, and serve warm with coffee.</li>
            </ol>
          </p>
          <p>
            Want more recipes like this?{' '}
            <a
              href="#"
              onClick={() => subscribeModalRef.current.toggleModal()}
            >
              Subscribe here!
            </a>
          </p>
          <p>
             {/*Link to buy the recipe book */}
          <buy-book-link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('RecipeBook'); 
              }}
            >
              (Buy the Recipe Book for the full list of ingredients!)
            </a>
          </buy-book-link>
          </p>
        </div>
        
      </div>
      <SubscribeModal ref={subscribeModalRef} />
        </div>
        

        





    
  );
};

export default RecipeDetails;
