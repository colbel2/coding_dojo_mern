import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewPetForm = (props) => {

    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [description, setDescription] = useState(null)
    let [skillsOne, setSkillsOne] = useState(false)
    let [skillsTwo, setSkillsTwo] = useState(false)
    let [skillsThree, setSkillsThree] = useState(false)

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createPetSubmitHandler = (e)=>{
        e.preventDefault();

        let formInfoObj = {name, type, description, skillsOne, skillsTwo, skillsThree};

        axios.post("http://localhost:8000/api/pets", formInfoObj)
            .then(res=>{
                console.log("response after posting", res)

                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }else{
                    props.setNewNinjaAdded(!props.newNinjaAdded)
                }
            })
            .catch(err=>console.log("error in submitting post request",err))  
    }

    return (
        <div>
            <form onSubmit = {createPetSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input onChange = {(e)=>{setName(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type</label>
                    <input onChange = {(e)=>{setType(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skills</label>
                    <input onChange = {(e)=>{setSkillsOne(e.target.checked)}} type="text" name="" id="" className="form-checkbox" />
                    <input onChange = {(e)=>{setSkillsTwo(e.target.checked)}} type="text" name="" id="" className="form-checkbox" />
                    <input onChange = {(e)=>{setSkillsThree(e.target.checked)}} type="text" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Add Pet!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewPetForm;