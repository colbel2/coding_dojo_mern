
import './App.css';
import React, {useState} from 'react';
import ProjectManagerForm from './components/ProjectManagerForm';

import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link  
} from "react-router-dom";


function App() {
  let [newProjectManagerAdded, setNewProjectManagerAdded] = useState(false)
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Project Manager</h1>
        <Switch>
          <Route exact path= "/">
            <ProjectManagerForm newProjectManagerAdded={newProjectManagerAdded} newProjectManagerAdded= {newProjectManagerAdded} ></ProjectManagerForm>
            <hr />
            {/* <AllProjects newProjectManagerAdded={newProjectManagerAdded}></AllProjects> */}
          </Route>
          {/* <Route exact path = "/new">
            
          </Route> */}

          {/* <Route exact path = "/projectmanager/:id">
            <OneProject></OneProject>
          </Route>

          <Route exact path = "/projectmanager/edit/:id">
            <EditProjectForm/>
          </Route> */}

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;