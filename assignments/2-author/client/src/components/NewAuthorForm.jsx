import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewAuthorForm = (props) => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createAuthorSubmitHandler = (e)=>{
        e.preventDefault();


        let formInfoObj = {firstName, lastName};

        axios.post("http://localhost:8000/api/authors", formInfoObj) 
            .then(res=>{
                console.log("response after posting", res)

                if(res.data.error){ 
                    setFormErrors(res.data.error.errors)
                }else{
                    history.push("/")

                }
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <form onSubmit = {createAuthorSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange = {(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.lastName?.message}</p>

                </div>
                
                <input type="submit" value="Create Author!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewAuthorForm;