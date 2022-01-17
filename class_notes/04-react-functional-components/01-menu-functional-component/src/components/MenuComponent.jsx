import React, { useState } from 'react';

const Menu = (props) => {
    
    // destructuring from props, the dish, price and likes
    let {food, price, likes} = props;

    //creating a state variable for likes, to allow them to change. Only things in state can change
    let [likesCount, setLikesCount] = useState(0) // the second item in the array can be named anything, however it is good practice to name it set then whatever the first word is

    // a function that is attached to the like button click. Increase item by 1.
    let likeHandler = ()=>{
        setLikesCount(likesCount+1)
        // console.log('Testing Button ${food}!');
        // alert('you like ${dish}')

    }
    return(
        <div>
            <h1> {food}</h1>
            <p>Price: ${price}</p>
            <p>Likes: {likesCount}</p>
            Description: {props.description}{props.children}
            <button onClick={likeHandler} >Like</button>
        </div>
    );
}
export default Menu;