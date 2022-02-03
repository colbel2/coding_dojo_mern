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
    
    return (
        <div>
            
            {allPets.map((petObj, i)=>{
                return(
                    <div className='container' key={i} style = {{border: "1px solid black"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h4>{petObj.name}</h4></td>
                                    <td>{petObj.type}</td>
                                    <td><Link to={`/pets/${petObj._id}`} className = "btn btn-info" >Details</Link> | &nbsp; 
                                        <Link to={`/pets/edit/${petObj._id}`} className = "btn btn-warning" >Edit</Link> | &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )
            })}
        </div>
    );
};

export default AllPets;