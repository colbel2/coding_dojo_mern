
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Search from './components/Search';

function App() {
  return (
    <div className="App container">
      <h1>Luke APIwalker</h1>
      <Search></Search>
    </div>
  );
}

export default App;
