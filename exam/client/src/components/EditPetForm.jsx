import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditPetForm = () => {

    const { id } = useParams();

    let [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res=>{
            console.log("Program response to selected pet", res)
            setPetInfo(res.data.results)
        })
        .catch(err=> console.log(err))
    },[])

    const history = useHistory();

    const changeHandler = (e)=>{
        console.log("ALERT: The form has changed!!")
        if(e.target.type === "control"){
            setPetInfo({
                ...petInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setPetInfo({
                ...petInfo,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const updatePetSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, petInfo)
            .then(res=>{
                console.log("Put request complete!===>", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h4>Edit</h4>
            <form onSubmit = {updatePetSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        value={petInfo.name} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type</label>
                    <input 
                        type="text" 
                        name="type"
                        className="form-control" 
                        value={petInfo.type} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" 
                        name="description"
                        className="form-control" 
                        value={petInfo.description} 
                        onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Skills</label>
                    <input 
                        type="text" 
                        name="skillsOne"
                        className="form-control" 
                        value={petInfo.skillsOne} 
                        onChange={changeHandler} />
                    <input 
                        type="text" 
                        name="skillsTwo"
                        className="form-control" 
                        value={petInfo.skillsTwo} 
                        onChange={changeHandler} />
                    <input 
                        type="text" 
                        name="skillsThree"
                        className="form-control" 
                        value={petInfo.skillsThree}  
                        onChange={changeHandler} />
                </div>
                <input type="submit" value="Edit Pet!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditPetForm;