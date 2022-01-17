// import logo from './logo.svg';
// import './App.css';
import MenuItem from './components/MenuItem';

function App() {

  return (
    <div className="App">
      <h1>Dojo Diner- The finest food of the JavaScript Developers</h1>

      {/* information you pass down to a component is called props  */}
      <MenuItem price={15.99} dish={"Spicy Salmon Roll"} likes={2} >
        <p>Its really spicy and inflationy</p>
        <em>Allegies Info: Its gluten free, yay. Extra 5 dollars tho'</em>
      </MenuItem>
      <hr />
      <MenuItem price={12.99} dish={"Squash"} likes={10}>
        <p>Its just a squash. Saschquash tho'</p>
      </MenuItem>
      <hr />
      <MenuItem price={8.99} dish={"Crab Rangoon"} likes={0} >
        <p>This is bougie sounding and it tastes good too</p>
      </MenuItem>
      <hr />
      <MenuItem price={20.99} dish={"Momo"} likes={5}>
        <p>This is an authentic nepali dumpling. Namaste</p>
      </MenuItem>
      <hr />


    </div>
  );
}

export default App;
