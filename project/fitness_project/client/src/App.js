import './App.css';
import React, {useState} from 'react';
// import NewPetForm from './components/NewPetForm';
import AllWorkouts from './components/AllWorkouts';
// import OnePet from './components/OnePet';
// import EditPetForm from './components/EditPetForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  let [newWorkoutAdded, setNewWorkoutAdded] = useState(false)
  return (
    <BrowserRouter>
      <div className = "App Container">
        <h1>Hello from front end: TEST!</h1>
        
        <Switch>
          <Route exact path ='/'>
            <AllWorkouts newWorkoutAdded={setNewWorkoutAdded}></AllWorkouts>
          </Route>
      






        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
