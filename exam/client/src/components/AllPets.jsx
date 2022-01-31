import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const AllPets = (props) => {

    let [allPets, setAllPets] = useState([])
    let [deleted, setDeleted] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/")
            .then(res=>{
                console.log("Program response to retrieving all pets===>", res)
                setAllPets(res.data.results)
            })
            .catch(err=> console.log("ERROR", err))
    },[deleted, props.newPetAdded ]) 

    const deletePet = (petID)=>{

        axios.delete(`http://localhost:8000/api/pets/${petID}`)
            .then(res=>{
                console.log("Program response to deleting a pet===>", res)
                setDeleted(!deleted)
            })
            .catch(err=> console.log("ERROR", err))
    }

    return (
        <div>
            <h3>These Pets are looking for a good home!</h3>
            {allPets.map((petObj, i)=>{
                return(
                    <div key={i} style = {{border: "1px solid black"}}>
                        <h4><Link to={`/pets/${petObj._id}`}>{petObj.name}</Link></h4>
                        <p>Pet Type: {petObj.type}</p>
                        <p>Id: {petObj._id}</p>
                        <p>
                            <Link to={`/pets/${petObj._id}`} className = "btn btn-info" >Details</Link> | &nbsp; 
                            <Link to={`/pets/edit/${petObj._id}`} className = "btn btn-warning" >Edit</Link> | &nbsp;
                            {/* <button onClick = {()=>deletePet(petObj._id)} className="btn btn-danger">Delete Ninja</button> */}
                        </p>
                        

                    </div>
                )
            })}
        </div>
    );
};

export default AllPets;