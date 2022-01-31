import './App.css';
import React, {useState} from 'react';
import NewPetForm from './components/NewPetForm';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import EditPetForm from './components/EditPetForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let [newPetAdded, setNewPetAdded] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        <Link to = "/new" className='btn btn-secondary'>Add a pet to the shelter</Link>
        <Switch>

          <Route exact path= "/">
            <AllPets newPetAdded={newPetAdded}></AllPets>
          </Route>

          <Route exact path = "/new">
          <Link to = "/" className='btn btn-secondary'>Back to home</Link>
            <NewPetForm newPetAdded={newPetAdded} setNewPetAdded= {setNewPetAdded} ></NewPetForm>
          </Route>

          <Route exact path = "/pets/:id">
            <OnePet></OnePet>
          </Route>

          <Route exact path = "/pets/edit/:id">
            <EditPetForm/>
          </Route>

        // </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;