// This file must be made with a capitol first letter
import React, { Component } from 'react'; // importing React and Compnent from React library so that we can create a React component

class MenuItem extends Component { //the class name must be the same exact name of the file we just made and are working in
    render() {
        console.log("logging this.props", this.props)
        let {name, price} = this.props 
        return <div>
            <h1>{name}</h1>
            <p>Price: {price} </p>
            {this.props.children} 
            <p>Number of likes: {this.props.likes} </p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>; // you can not have 5 separate <div>s in this file, if you want multiple <div>s they must be inside a single <div> example above <div>*5
    }
}
    
export default MenuItem; // export the class so it is importable from other files