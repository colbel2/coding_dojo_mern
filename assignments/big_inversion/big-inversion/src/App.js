import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Jane"} lastName = {'Doe'} age = {45} hair = {"Black"}></PersonCard>
      <PersonCard firstName = {"Paul"} lastName = {'Bunyon'} age = {66} hair = {"Grey"}></PersonCard>
      <PersonCard firstName = {"Michael"} lastName = {'Phelps'} age = {38} hair = {"Brown"}></PersonCard>
      <PersonCard firstName = {"Leo"} lastName = {'DoDiccaprio'} age = {45} hair = {"Blonde"}></PersonCard>
    </div>
  );
}

export default App;
