// import logo from './logo.svg';
// import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Menu dish = {"Calamari"} price = {12.99} likes = {2}>
        <p>Description: Its fried squid with basil</p>
      </Menu>
      <hr />
      <Menu dish = {"Butter Chicken"} price = {18.99} likes = {0}>
        <p>Description: Not recommended by the Rob Heart Association</p>
      </Menu>
      <hr />
      <Menu dish = {"Robs Mushroom coffee"} price = {5} likes = {10}>
        <p>Description: Its will get you focused! </p>
      </Menu>
      <hr />

    </div>

    
  );
}

export default App;
