import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditAuthorForm = () => {

    const { id } = useParams();

    let [authorInfo, setauthorInfo] = useState({})

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            console.log("response is this-->", res)
            setauthorInfo(res.data.results)

        })
        .catch(err=> console.log(err))
    },[])

    const history = useHistory();

    const changeHandler = (e)=>{
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){ 
            setauthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setauthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    


    const updateauthorsubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, authorInfo)
            .then(res=>{
                console.log("res after put request-->", res)
                history.push("/")
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <h4>Edit Author Below</h4>
            <form onSubmit = {updateauthorsubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        className="form-control" 
                        value={authorInfo.firstName} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName"
                        className="form-control" 
                        value={authorInfo.lastName} 
                        onChange={changeHandler}/>
                </div>
                
                <input type="submit" value="Update Author!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditAuthorForm;