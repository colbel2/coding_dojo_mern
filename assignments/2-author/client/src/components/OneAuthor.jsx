import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneAuthor = () => {
    const { id } = useParams(); 

    const history = useHistory();

    const [authorDetails, setauthorDetails] = useState({}) 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log("response when making request for one author", res)
            setauthorDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const deleteAuthor = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    

    return (
        <div>
            <h4>Details about {authorDetails.firstName} {authorDetails.lastName}</h4>
            <p>ID: {id}</p>
            <button onClick = {deleteAuthor} className="btn btn-danger">Delete Author</button>
        </div>
    );
};


export default OneAuthor;