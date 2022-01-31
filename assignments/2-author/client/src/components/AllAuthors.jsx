import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link 
  } from "react-router-dom";

const AllAuthors = (props) => {

    let [allAuthors, setallAuthors] = useState([])
    let [deleted, setDeleted] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/")
            .then(res=>{
                console.log("response when getting all authors-->", res)
                setallAuthors(res.data.results)
            })
            .catch(err=> console.log("ERROR", err))
    },[deleted, props.newAuthorAdded ])

    const deleteAuthor = (authorID)=>{

        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
            .then(res=>{
                console.log("res when deleting->", res)
                setDeleted(!deleted)
            })
            .catch(err=> console.log("ERROR", err))
    }

    return (
        <div>
            <h3>All the authors</h3>
            {allAuthors.map((authorObj, i)=>{
                return(
                    <div key={i} style = {{border: "1px solid black"}}>
                        <h4><Link to={`/authors/${authorObj._id}`}>{authorObj.firstName} {authorObj.lastName}</Link></h4>
                        <p>Id: {authorObj._id}</p>
                        <p>
                            <Link to={`/authors/${authorObj._id}`} className = "btn btn-info" >Details</Link> | &nbsp; 
                            <Link to={`/authors/edit/${authorObj._id}`} className = "btn btn-warning" >Edit</Link> | &nbsp;
                            <button onClick = {()=>deleteAuthor(authorObj._id)} className="btn btn-danger">Delete Author</button>
                        </p>
                        

                    </div>
                )
            })}
        </div>
    );
};

export default AllAuthors;