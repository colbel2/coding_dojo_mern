import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewPetForm = (props) => {

    let [name, setName] = useState("")
    let [type, setType] = useState("")
    let [description, setDescription] = useState(null)
    let [skillsOne, setSkillsOne] = useState("")
    let [skillsTwo, setSkillsTwo] = useState("")
    let [skillsThree, setSkillsThree] = useState("")

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createPetSubmitHandler = (e)=>{
        e.preventDefault();

        let formInfoObj = {name, type, description, skillsOne, skillsTwo, skillsThree};

        axios.post("http://localhost:8000/api/pets", formInfoObj)
            .then(res=>{
                console.log("Post request respons===>", res)

                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }else{
                    history.push("/")
                }
            })
            .catch(err=>console.log("Request ERROR!! Re-submit",err))  
    }

    return (
        <div>
            <form className='row g-3' onSubmit = {createPetSubmitHandler}>
                <div className="form-group col md-6 ">
                    <label htmlFor="">Name</label>
                    <input onChange = {(e)=>{setName(e.target.value)}} type="text" name="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="form-group col md-6  ">
                    <label htmlFor="">Type</label>
                    <input onChange = {(e)=>{setType(e.target.value)}} type="text" name="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="form-group form-control form-control-lg">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="form-group ">
                    <label htmlFor="">Skills (Optional)</label>
                    <input onChange = {(e)=>{setSkillsOne(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSkillsTwo(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSkillsThree(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <input type="submit" value="Add Pet!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewPetForm;