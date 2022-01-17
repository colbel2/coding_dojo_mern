import React from 'react';
const Menu = (props) => {
    let {food, price, likes} = props;
    return(
        <div>
            <h1> {food}</h1>
            <p>Price: ${price}</p>
            <p>Likes: {likes}</p>
            <p>Description: {props.description}{props.children}</p>
            
        </div>
    );
}
export default Menu;