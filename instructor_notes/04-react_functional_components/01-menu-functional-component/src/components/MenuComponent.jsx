import React, { useState } from 'react';

const Menu = (props) => {
    //destructuring from props the dish, price and likes so we dont have to type props.dish or props.likes every time
    let {dish,price,likes} = props;


    //creating a state variable to store the likes so that the likes can change. Only things in state can change. the first word in the array is the variable name, the second word in the array represents the setter for that variable
    let [likesCount, setLikesCount] = useState(0)


    //a function that is attached to the like button click. It will incrase the number of likes for that particular menu item by 1
    let likeHandler = ()=>{
        setLikesCount(likesCount+1)
    }



    return(
        <div>
            <h1>{dish}</h1>
            <p>Price: ${price}</p>
            <p>Likes: {likesCount}</p>
            {props.children}
            <button onClick={likeHandler} >Like</button>
        </div>
    );
}


export default Menu;