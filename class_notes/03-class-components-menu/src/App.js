// go to public -> index.html to edit the <title></title> and add things like Bootstrap

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
      {/* information you pass down to a component is called a prop */}
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

// steps for props
// 1. Apps.js page within <class name> tag add a prop name = {}
// 2. Class component page add {this.props.propname} to the line you want a prop
// 3. simplify this with let {propname} = this.props

// steps for using children
// 1. Apps.js page in between <class name> </class name> tags you can add html tags
// 2. to render the tags go to components page and add {this.props.children} wherever you want it to show up on the page
//   a. children can have children within the Apps.js page by using html tags like <div>
// 3. 