import React from 'react';
import './App.css';

import PersonComponent from './components/MyNewComponent';
// var peopleArr =[
//   {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
//   {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
//   {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
//   {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
// ]

// function App() {
//   return (
//     <div className="App">

//       {peopleArr.map(person => {
//         return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
//       })
      
//       }

//     </div>
//   );
// }

// export default App;
function App() {

  return (
    <div className="App">
      <PersonComponent firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}>
      </PersonComponent>
      <PersonComponent firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"White"}>
      </PersonComponent>
      <PersonComponent firstName = {"Millard"} lastName = {"Fillmoree"} age = {50} hairColor = {"Blonde"}>
      </PersonComponent>
      <PersonComponent firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}>
      </PersonComponent>    
    </div>
  )
}
export default App;