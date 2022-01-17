
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Menu food = {"Calamari"} price = {15.99} likes = {0} description = {"Kinda gross imo"}></Menu>
      <hr />
      <Menu food = {"Burrito"}price = {8.99} likes = {1000000} description = {"Best food you will ever have"}></Menu>
      <hr />
      <Menu food = {"Pizza"}price = {17.99} likes = {0}>
        <p>V good</p>
      </Menu>
      <hr />
    </div>
  );
}

export default App;
