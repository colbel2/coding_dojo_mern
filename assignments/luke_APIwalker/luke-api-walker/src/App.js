
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Search from './components/Search';

function App() {
  return (<BrowserRouter>
    <div className="App container">
      <h1>Luke Api Walker</h1>
      <Search></Search>
      <Switch>
        <Route exact path = "/:category/:id">
          {/* <Detail></Detail> */}
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
}

export default App;
