import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route 
} from "react-router-dom";
import Practice from './components/Practice';


function App() {
  return (
    <BrowserRouter>
    
    
    
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <h1>Welcome to home page</h1>
        </Route>
        <Route exact path = "/:id">
          <Practice></Practice>
        </Route>
        <Route exact path = "/:id/:fontColor/:backGroundColor">
          <Practice></Practice>
        </Route>
      </Switch>
    </div>
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
