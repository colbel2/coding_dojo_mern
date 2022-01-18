import './App.css';
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App container" >
      {/* <Pokemon></Pokemon> */}
      <h3>Hello from app</h3>
      <PokemonAxios></PokemonAxios>
    </div>
  );
}

export default App;
