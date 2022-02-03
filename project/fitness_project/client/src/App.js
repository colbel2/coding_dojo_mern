import './App.css';
import React, {useState} from 'react';
import NewWorkoutForm from './components/NewWorkout';
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
            <Link to = "/new" className="btn btn-primary position-relative position-absolute top-0 end-0">Log A Workout</Link>
          </Route>

          <Route exact path ='/new'>
            <Link to = "/" className='btn btn-secondary position-relative position-absolute top-0 end-0'>Back to home</Link>
            <NewWorkoutForm newWorkoutAdded={newWorkoutAdded} setNewWorkoutAdded={setNewWorkoutAdded}></NewWorkoutForm>
          </Route>






        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
