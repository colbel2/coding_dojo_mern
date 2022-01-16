/*
Difference between props vs state:
1. Props are information that we pass down to a component when we render it (load up the component with initial information). Props are not supposed to be changeable. If you want to make information that comes from props changeable, you have to put it in state. 

2. State is information that can change within a component and uniquely to a specific component, like the likes in this application. Example- weather can change from region to region. State variables can change from component to component. One state variabel's likes might go up by 1, another might stay the same. 

*/



import React, { Component } from 'react'; //importing React and Component so that we can create React component

class MenuItem extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            likes: this.props.likes
        };
    }


    render() {

        let clickHandler = ()=>{
            console.log("hi");
            //when the button is clicked, increase the state variable for likes

            //this.state.likes++; //this way does not work even though it would make sense. State variables wont change like a normal variable


            //this is how you change a state variablee-> use the setState() functionality
            this.setState({likes: this.state.likes+1})

            // alert("you clicked it! yayy!")
        }


        // console.log("logging this.props", this.props)
        let {dish, price} = this.props

        return <div> 
            <h1>{dish}</h1>
            <p>Price: {price} (Inflation doe)</p>
            {this.props.children}
            <p>Number of likes: {this.state.likes} </p>
            <button className= "btn btn-primary" onClick = {clickHandler}>Like {this.props.dish}</button>

        </div>
        
    }
}
    
export default MenuItem; //export the class so that it is importable from other files
