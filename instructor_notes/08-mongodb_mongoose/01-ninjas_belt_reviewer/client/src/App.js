import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NewNinjaForm from './components/NewNinjaForm';
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import EditNinjaForm from './components/EditNinjaForm';

import {
  BrowserRouter, //tells the application we can enable routing
  Switch, //allows us to indicate which routes we have and which components should show in specific routes
  Route, //allows us to define the route paths and which components belong to specific route paths
  Link  //just like an a href but it wont reload the page. You can format this as a button using bootstrap
} from "react-router-dom";


function App() {
  let [newNinjaAdded, setNewNinjaAdded] = useState(false) //this variable is used to send to the form component so that whenever the form submits to create new ninja, this variable will update. We also send this variable to the AllNinjas components so that whenver this variable updates, AllNinjas component knows to re-run the axios call inside of use effect to get the new list of all ninjas that has the newly added ninja incluced

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninjas Belt Reviewer</h1>
        {/* <Link to = "/new" className='btn btn-secondary'>Add Ninja</Link> */}
        <Switch>
          <Route exact path= "/">
            <NewNinjaForm newNinjaAdded={newNinjaAdded} setNewNinjaAdded= {setNewNinjaAdded} ></NewNinjaForm>
            <hr />
            <AllNinjas newNinjaAdded={newNinjaAdded}></AllNinjas>
          </Route>
          {/* <Route exact path = "/new">
            
          </Route> */}

          <Route exact path = "/ninjas/:id">
            <OneNinja></OneNinja>
          </Route>

          <Route exact path = "/ninjas/edit/:id">
            <EditNinjaForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
