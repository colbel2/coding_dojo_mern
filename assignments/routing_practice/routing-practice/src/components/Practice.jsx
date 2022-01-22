import React from 'react';
import { useParams } from "react-router";


const Practice = () => {
    const { id, fontColor, backGroundColor } = useParams();



    return (
        <div style = {{color: `${fontColor}`, backgroundColor: `${backGroundColor}`}}>
            {isNaN(id)?
            <h1>The word is {id}</h1>:
            <h1>Viewing # {id}</h1>
            } 
        </div>
    );
};


export default Practice;