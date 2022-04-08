import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const AllNinjas = (props) => {

    let [allNinjas, setAllNinjas] = useState([])
    let [deleted, setDeleted] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/allninjas")
            .then(res => {
                console.log("response when getting all ninjas", res)
                setAllNinjas(res.data.results)
            })
            .catch(err => console.log("ERROR", err))
    }, [deleted, props.newNinjaAdded])

    const deleteNinja = (ninjaId)=> {
        axios.delete(`http://localhost:8000/api/ninja/${ninjaId}`)
        .then(res=>{
            console.log("Response deleting ninja", res)
            setDeleted(!deleted)
        })
        .catch(err => console.log("ERROR", err))
        
    }


    return (
        <div>
            <h3>All The Ninjas</h3>
            {allNinjas.map((ninjaObj, i) => {
                return (
                    <div key={i} style={{ border: "1px solid black" }}>
                        <h4>{ninjaObj.firstName} {ninjaObj.lastName}</h4>
                        <p>Number of Belts: {ninjaObj.numBelts}</p>
                        <p>ID: {ninjaObj._id}</p>
                        <p>
                            <Link to={`/oneNinja/${ninjaObj._id}`} className="btn btn-info" > Details </Link>   | &nbsp;
                            <Link to={`/oneNinja/edit/${ninjaObj._id}`} className="btn btn-warning" > Edit </Link>  | &nbsp;
                            <button onClick= {()=>deleteNinja(ninjaObj._id)} className='btn btn-danger'>Delete Ninja</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};



export default AllNinjas;
