
import './App.css';
import NewNinjaForm from './components/NewNinjaForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninja Review</h1>
          <Switch>
            <Route exact path="/">
              <NewNinjaForm></NewNinjaForm>
              <hr />
              <AllNinjas></AllNinjas>
            </Route>

            <Route exact path ="/oneNinja/:id">
              <OneNinja></OneNinja>
            </Route>

          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
