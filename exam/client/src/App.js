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
        <h1 >Pet Shelter</h1>
        
        <Switch>

          <Route exact path= "/">
            <h2>These Pets are looking for a good home!</h2>
            <AllPets newPetAdded={newPetAdded}></AllPets>
            <Link to = "/new" className="btn btn-primary position-relative position-absolute top-0 end-0">Add a pet to the shelter</Link>
          </Route>

          <Route exact path = "/new">
          <Link to = "/" className='btn btn-secondary position-relative position-absolute top-0 end-0'>Back to home</Link>
            <NewPetForm newPetAdded={newPetAdded} setNewPetAdded= {setNewPetAdded} ></NewPetForm>
          </Route>

          <Route exact path = "/pets/:id">
          <Link to = "/" className='btn btn-secondary position-relative position-absolute top-0 end-0'>Back to home</Link>
            <OnePet></OnePet>
          </Route>

          <Route exact path = "/pets/edit/:id">
          <Link to = "/" className='btn btn-secondary position-relative position-absolute top-0 end-0'>Back to home</Link>
            <EditPetForm/>
          </Route>

        // </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;