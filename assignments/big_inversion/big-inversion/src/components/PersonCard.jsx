import React from 'react';
const PersonCard = (props) => {
    let {firstName, lastName, age, hair} = props;
    return(
        <div>
            <h1> {firstName} {lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
            
            
        </div>
    );
}
export default PersonCard;