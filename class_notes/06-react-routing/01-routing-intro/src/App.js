
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route 
} from "react-router-dom";
import Profile from './components/Profile';
import Group from './components/Group';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>BookFace - Bootleg FaceBook in the beginning stages</h1>
      <Link className='btn btn-success' to ="/">Home</Link>||
      <Link  className='btn btn-info' to="/profile">Go To My Profile</Link> || 
      <Link className='btn btn-primary' to="/groups">Go To Groups</Link>
      <Switch>
        <Route path = "/profile">
          <Profile></Profile>
        </Route>
        <Route path = "/groups">
          <Group></Group>
        </Route>
        <Route path = "/">
          <p>Home page</p>
        </Route>
      </Switch>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
