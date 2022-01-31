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
            console.log("response when making request for one ninja", res)
            setPetDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const deletePet = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    

    return (
        <div>
            <h4>Details about {petDetails.name}</h4>
            <p>Type: {petDetails.type}</p>
            <p>Description: {petDetails.description}</p>
            <p>Skills: {petDetails.skillsOne}{petDetails.skillsTwo}{petDetails.skillsThree}</p>
            <button onClick = {deletePet} className="btn btn-danger">Delete Pet</button>
        </div>
    );
};


export default OnePet;