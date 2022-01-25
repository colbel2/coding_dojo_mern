import logo from './logo.svg';
import './App.css';
import NewNinjaForm from './components/NewNinjaForm';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link 
} from "react-router-dom";


/*

when form submits, send post request using axios with teh form info to create something new
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninjas Belt Reviewer</h1>
        <Switch>
          <Route exact path= "/">
            <NewNinjaForm></NewNinjaForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
