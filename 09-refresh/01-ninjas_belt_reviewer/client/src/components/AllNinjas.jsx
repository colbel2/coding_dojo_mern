import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const AllNinjas = () => {

    let [allNinjas, setAllNinjas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/allninjas")
            .then(res => {
                console.log("response when getting all ninjas", res)
                setAllNinjas(res.data.results)
            })
            .catch(err => console.log("ERROR", err))
    }, [])




    return (
        <div>
            <h3>All The Ninjas</h3>
            {allNinjas.map((ninjaObj, i)=>{
                return(
                    <div key={i} style = {{border: "1px solid black"}}>
                        <h4>{ninjaObj.firstName} {ninjaObj.lastName}</h4>
                        <p>Number of Belts: {ninjaObj.numBelts}</p>
                        <p>ID: {ninjaObj._id}</p>
                        <p><Link to={`/oneNinja/${ninjaObj._id}`} className="btn btn-info" > Details </Link></p>
                    </div>
                )
            })}
        </div>
    );
};



export default AllNinjas;
