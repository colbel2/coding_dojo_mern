import React from 'react';
import { useParams } from "react-router";


const Info = () => {
    const { id, borderStyle, fontSize} = useParams();



    return (
        <div style = {{border: `1px  ${borderStyle} black`, fontSize: `${fontSize}`}}>
            { isNaN(id)?
                <p>This is {id}'s' Page. This belongs to {id}.</p>:
                <h1>Viewing the profile of person # {id}</h1>
            }  
            <p>Note: You picked {borderStyle} and {fontSize}</p>
        </div>
    );
};


export default Info;