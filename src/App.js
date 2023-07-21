

import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Board from './Board/Board';
import Footer from './Footer/Footer'
const productsData = [
  
    {
      id: 1,
      name: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      id: 2,
      name: "Special Item",
      price: "$18.00",
    },
    {
      id: 3,
      name: "Sale Item",
      price: "$25.00",
    },
    {
      id: 4,
      name: "Popular Item",
      price: "$40.00",
    },
    {
      id: 5,
      name: "Sale Item",
      price: "$25.00",
    },
    {
      id: 6,
      name: "Fancy Product",
      price: "$120.00 - $280.00",
    },
    {
      id: 7,
      name: "Special item",
      price: "$18.00",
    },
    {
      id: 8,
      name: "Popular Item",
      price: "$40.00",
    },
  
  
];

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    const updatedProducts = products.filter((product) => product.id !== productId);
    const updatedCart = [...cart, productToAdd];

    setProducts(updatedProducts);
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);
    const updatedCart = cart.filter((product) => product.id !== productId);
    const updatedProducts = [...products, productToRemove];

    setProducts(updatedProducts);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Header/>
      <Board />
     <div className='cart-container'>
     {/* <h1>Shopping Cart</h1>
      <h2>Available Products</h2> */}

<div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price}
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="product-list">
       
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
     </div>
     <Footer/>
    
    </div>
  );
};

export default App;