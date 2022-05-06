import React, { useState, useEffect } from 'react';

import { NavBar, Filters, Products } from './components';

import './App.css';

const App = () => {
  const [query, setQuery] = useState();
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [starshipsDetails, setStarshipsDetails] = useState({});
  const [productLists, setProductLists] = useState([]);

  const getProductDetails = async (id) => {
      let response = await fetch(`https://swapi.dev/api/${id}/`);
      return await response.json();
  }
  const getFilteredProductDetails = (obj) => {
    return obj.results ?? [];
  }

  const getProducts = async () => {
    setVehicleDetails(await getProductDetails('vehicles'));
    setStarshipsDetails(await getProductDetails('starships'));
  };

  useEffect(async () => {
    getProducts();
    if (vehicleDetails || starshipsDetails) {
      const vehicle = [{id: 'vehicles', lists: getFilteredProductDetails(vehicleDetails)}];
      const starship = [{id: 'starships', lists: getFilteredProductDetails(starshipsDetails)}]
      // const vehicle = [{id: 'vehicles', lists: [{name:'abc', sponsor: 'abc', cost_in_credits: '50000'}, {name:'king', sponsor: 'abc', cost_in_credits: '50000'}]}];
      // const starship = [{id: 'starships', lists: [{name:'ship', sponsor: 'ship', cost_in_credits: '90000'}]}];
      setProductLists([...vehicle, ...starship]);
    }
  }, []);

  return (
    <div className='App'>
      <NavBar value={query} onQueryChange={setQuery}/>
      <section className='App-product'>
        <Filters/>
        <Products products={productLists}/>
      </section>
    </div>
  );
}

export default App;
