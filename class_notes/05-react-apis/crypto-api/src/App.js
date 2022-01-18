
import './App.css';
import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
import CryptoCoinsUsingAxios from './components/CryptoCoinsUsingAxios';
import PokemonHint from './components/PokemonHint';

function App() {
  return (
    <div className="App">
      <h3>Hello from APP.js</h3>
      {/* <CryptoCoinsUsingFetch> </CryptoCoinsUsingFetch> */}
      <CryptoCoinsUsingAxios></CryptoCoinsUsingAxios>
      {/* <PokemonHint></PokemonHint> */}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
// import PokemonHint from './components/PokemonHint';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Crypto Api demo</h1>
//       {/* <CryptoCoinsUsingFetch></CryptoCoinsUsingFetch> */}
//       <PokemonHint></PokemonHint>
//     </div>
//   );
// }

// export default App;