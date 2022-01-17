/* Difference between props vs state:
1. Props are information that we pass down to a component when we render it.
Props are not supposed to be changable. If you want to make information that 
comes from props changable, you have to put it in state.

2. State is information that can change within a component. Example - weather
can change from regio to region. State variables can change from component to component.
One state variables likes might go up by 1, another may stay the same.*/

import React, { Component } from 'react';

class MenuItem extends Component {
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
            this.setState({likes: this.state.likes+1}) 
            
        }
        return <div>
            <h1>{name}</h1>
            <p>Price: {price} </p>
            {this.props.children} 
            <p>Number of likes: {this.state.likes} </p>
            <button onClick = {clickLike}>Like</button>
            
        </div>;
    }
}
    
export default MenuItem;