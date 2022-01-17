// go to public -> index.html to edit the <title></title> and add things like Bootstrap
import logo from './logo.svg';
// Line one can be deleted as it is the react logo that comes default
import './App.css';
import MenuItem from './components/MenuItem'; // . means this folder-> components folder -> name of component(which is not the file but the class)
// line 4 is the default css style. It can be commented or deleted out if unwanted
// Everything that comes default between the <div>s can be deleted
function App() {
  // let x = price;
  // if(Date.today()) line 9 & 10 demonstrate an incomplete example of implementing some Javascript functions into our page
  return (
    <div className="App">
      <h1>Chipotle-Finest food in the world</h1>
      <MenuItem></MenuItem>
    </div>
  ); 
}

export default App;


// <MenuItem> is treated like <h1> or <div> or any other html tag
// By adding <MenuItem> tag you import everything you made in the corresponding component file

// steps for class components
// 1. create React App
//   a. open command prompt
//   b. cd into folder where app should be stored
//   c. npx create-react-app your-project-name-here
//   d. navigate to the newly created folder 
//   e. npm start
// 2. create a components folder within the src folder
//   a. create a jsx file inside this folder, the first letter must be capital
// 3. import React, { Component } from 'react';
// 4. class "NameOfFile" extends Component { //the class name must be the same exact name of the file we just made and are working in
//   render() {
//       return 
//   }
// }
  
// export default NameOfFile; // export the class so it is importable from other files
// 5. go to app.js file and add import NameofFile from './components/NameOfFile'
// 6. add a html tag <NameOfFile></NameOfFile> to render the file