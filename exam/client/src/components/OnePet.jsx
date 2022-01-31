import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OnePet = () => {
    const { id } = useParams();

    const history = useHistory();

    const [petDetails, setPetDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log("Program response when looking for one pet details====>", res)
            setPetDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const adoptPet = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("Program adopting(deleting) Pet====>", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    


    return (
        <div>
            <button onClick = {adoptPet} className="btn btn-danger position-relative position-absolute bottom-75 end-0">Adopt Pet</button>
            
            <h4>Details about {petDetails.name}</h4>
            <div className='container' style = {{border: "1px solid black"}}>   
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4>{petDetails.name}</h4></td>
                            <td>{petDetails.type}</td>
                            <td>{petDetails.skillsOne}</td>
                            <td>{petDetails.skillsTwo}</td>
                            <td>{petDetails.skillsThree}</td>
                        </tr>
                    </tbody>
                </table>
            <button class='btn-primary'>Like {petDetails.name}</button></div>
        </div>
    );
};


export default OnePet;