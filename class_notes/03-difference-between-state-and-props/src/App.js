
import './App.css';
import MenuItem from './components/MenuItem';
function App() {
  return (
    <div className="App">
      <h1>Chipotle-Finest food in the world</h1>
      <MenuItem price = {15.99} name = {"Lions Choice"} likes = {7}>
        <p>It is good but expensive</p>
      </MenuItem>
      <hr />
      <MenuItem price = {12.99} name = {"Five Guys"} likes = {5}>
        <p>Overrated</p>
      </MenuItem>
      <hr />
      <MenuItem price = {8.99} name = {"Chipotle"} likes = {10000000}>
        <p>Best meal you will ever have</p>
        <div>
          <h3>Seriously amazing</h3>
          <ul><li>Chicken Burrito</li><li>Chicken Bowl</li></ul>
        </div>
      </MenuItem>
      <hr />
      <MenuItem price = {10.99} name = {"Queerdoba"} likes = {-999999999}>
        <p>worst crap of all time</p>
        <em>buyer beware</em>
      </MenuItem>
      <hr />
    </div>
  ); 
}

export default App;
