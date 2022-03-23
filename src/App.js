import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import ShopItem from './pages/ShopItem';

import montreal from './images/montreal.jpg';
import nationalParks from './images/nationalParks.jpg';
import dontMixEm from './images/dontMixEm.jpg';
import navy from './images/navy.jpg';
import puck from './images/puck.jpg';
import scheveningen from './images/scheveningen.jpg';
import swimCampaign from './images/swimCampaign.jpg';
import swimHealth from './images/swimHealth.jpg';
import trumpets from './images/trumpets.jpg';
import wildLife from './images/wildLife.jpg';
import yellowstone from './images/yellowstone.jpg';
import zion from './images/zion.jpg';

import './styles/style.css';

function App() {
  const [cart, setCart] = useState([]);

  const items = [
    {id: 0, name: 'Montreal Winter Sports', img: montreal, price: 19.99},
    {id: 1, name: 'The National Parks Preserve Wild Life', img: nationalParks, price: 14.99},
    {id: 2, name: 'Don\'t mix \'Em', img: dontMixEm, price: 29.99},
    {id: 3, name: 'Join the Navy', img: navy, price: 9.99},
    {id: 4, name: 'Puck', img: puck, price: 14.99},
    {id: 5, name: 'Scheveningen', img: scheveningen, price: 14.99},
    {id: 6, name: 'Learn to Swim Campaign', img: swimCampaign, price: 19.99},
    {id: 7, name: 'Swim for Health', img: swimHealth, price: 19.99},
    {id: 8, name: 'The Trumpet Calls', img: trumpets, price: 29.99},
    {id: 9, name: 'Don\'t Kill Our Wild Life', img: wildLife, price: 19.99},
    {id: 10, name: 'Yellowstone National Park', img: yellowstone, price: 14.99},
    {id: 11, name: 'Zion National Park', img: zion, price: 14.99}
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Nav cart={cart} setCart={setCart} />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route
            path='/shop'
            element={<Shop items={items} />}
          />
          <Route 
            path='/shop/:id'
            element={<ShopItem cart={cart} setCart={setCart} items={items} />}
          />
          <Route
            path='/checkout'
            element={<Checkout cart={cart} setCart={setCart} items={items} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
