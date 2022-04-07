import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const OneNinja = () => {
    const { id } = useParams();

    const [ninjaDetails, setNinjaDetails] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneNinja/${id}`)

            .then(res => {
                console.log("response when making request for one ninja", res)
                setNinjaDetails(res.data.results)

            })
            .catch(err => console.log(err))


    }, [])





    return (
        <div>
            <h1>Details about {ninjaDetails.firstName}</h1>
            <p>ID: {id}</p>
            <p>Number of Belts: {ninjaDetails.numBelts}</p>
            <p>Veteran: {ninjaDetails.isVeteran? "Veteran": "Not Veteran"}</p>

        </div>
    );
};



export default OneNinja;