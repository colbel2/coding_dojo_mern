
import './App.css';
import{ BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>BookFace</h1>
      <link to="Profile" >Profile Page</link>

      </BrowserRouter>
    </div>
  );
}

export default App;
