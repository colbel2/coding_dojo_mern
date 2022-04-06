
import './App.css';
import NewNinjaForm from './components/NewNinjaForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninja Review</h1>
          <Switch>
            <Route exact path="/">
              <NewNinjaForm></NewNinjaForm>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
