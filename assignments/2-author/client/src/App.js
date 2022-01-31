import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NewAuthorForm from './components/NewAuthorForm';
import AllAuthors from './components/AllAuthors.jsx';
import OneAuthor from './components/OneAuthor';
import EditAuthorForm from './components/EditAuthorForm';

import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link  
} from "react-router-dom";


function App() {
  let [newAuthorAdded, setnewAuthorAdded] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Authors</h1>
        <Link to = "/new" className='btn btn-secondary'>Add Author</Link>
        <Switch>
          <Route exact path= "/">
            
            <hr />
            <AllAuthors newAuthorAdded={newAuthorAdded}></AllAuthors>
          </Route>
          <Route exact path = "/new">
            <Link to = "/" className='btn btn-info'>HOME</Link>
            <NewAuthorForm newAuthorAdded={newAuthorAdded} setnewAuthorAdded= {setnewAuthorAdded} ></NewAuthorForm>
          </Route>

          <Route exact path = "/authors/:id">
            <OneAuthor></OneAuthor>
          </Route>

          <Route exact path = "/authors/edit/:id">
            <EditAuthorForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;