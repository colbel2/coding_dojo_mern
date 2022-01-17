import React, { Component } from 'react';
import classes from './MyNewComponent.module.css';

class PersonComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render(){
        let {firstName, lastName, hairColor} = this.props
        let clickAge = ()=>{
            console.log("Button Test")
            this.setState({age: this.state.age+1}) 
        }
        return <div>
            <h1>{firstName} {lastName}</h1>
            <p>Age: {this.state.age}</p>
            <button onClick={clickAge}>Happy Birthday!</button>
            <p>{hairColor}</p>



        </div>
        

        //     <div className={classes.card}>
        //         <div className={classes.content}>
        //             <h1>{this.props.lastName}, {this.props.firstName}</h1>
        //             <p>Age: {this.props.age}</p>
        //             <button onClick={clickAge}>Happy Birthday</button>
        //             <p>Hair Color: {this.props.hairColor}</p>
        //         </div>
        //     </div>
        // );

    }
}

export default PersonComponent;