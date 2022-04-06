import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const NewNinjaForm = () => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(0)
    let [isVeteran, setIsVeteran] = useState(false)

const submitHandler = (e)=> {
    e.preventDefault();
    console.log(firstName,lastName,numBelts,isVeteran);

    let formInfoObj = {firstName:firstName, lastName:lastName, numBelts:numBelts, isVeteran:isVeteran}
    console.log(formInfoObj)
    axios.post("http://localhost:8000/api/create/ninja", formInfoObj)
        .then(res=>{
            console.log("response after post request",res)
        })
        .catch(err=>console.log("error in submitting post request", err))
}

    return (
        <div>
            <form onSubmit ={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange = {(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input onChange = {(e)=>{setNumBelts(e.target.value)}} type="number" name="" id="" className="formcontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Are You a Veteran?</label>
                    <input onChange = {(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="formcontrol" />
                </div>
                <input type="submit" value="Create Ninja" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

NewNinjaForm.propTypes = {};

export default NewNinjaForm;