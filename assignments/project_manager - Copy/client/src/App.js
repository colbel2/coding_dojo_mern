
import './App.css';
import React, {useState} from 'react';
import NewProductsForm from './components/NewProductsForm';
import AllProducts from './components/AllProducts';
import EditProducts from './components/EditProducts';
import OneProduct from './components/OneProduct';

import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link  
} from "react-router-dom";


function App() {
  let [newProductAdded, setNewProductAdded] = useState(false)
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Project Manager</h1>
        <Switch>
          <Route exact path= "/">
            <NewProductsForm newProductAdded={newProductAdded} setNewProductAdded= {setNewProductAdded} ></NewProductsForm>
            <hr />
            <AllProducts newProductAdded={newProductAdded}></AllProducts>
          </Route>
          <Route exact path = "/new">
            
          </Route>

          <Route exact path = "/products/:id">
            <OneProduct></OneProduct>
          </Route>

          <Route exact path = "/products/edit/:id">
            <EditProducts></EditProducts>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;