// This file must be made with a capitol first letter
import React, { Component } from 'react'; // importing React and Compnent from React library so that we can create a React component

class MenuItem extends Component { //the class name must be the same exact name of the file we just made and are working in
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes
        };
    }
    render() {
        console.log("logging this.props", this.props)
        let {name, price} = this.props 
        
        let clickLike = ()=>{
            console.log("Button Test");
            // when the button is clicked, increase the state variable for likes
            // this.state.likes ++; // this way does not work even though it would make sense. State variables wont change like normal variables
            this.setState({likes: this.state.likes+1}) 
            // alert("you liked it!")
        }
        return <div>
            <h1>{name}</h1>
            <p>Price: {price} </p>
            {this.props.children} 
            <p>Number of likes: {this.state.likes} </p>
            <button onClick = {clickLike}>Like {name}</button>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>; // you can not have 5 separate <div>s in this file, if you want multiple <div>s they must be inside a single <div> example above <div>*5
    }
}
    
export default MenuItem; // export the class so it is importable from other files