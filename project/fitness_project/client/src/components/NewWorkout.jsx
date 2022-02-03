import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewWorkoutForm = (props) => {

    let [workoutName, setWorkoutName] = useState("")
    let [exercise, setExercise] = useState("")
    let [sets, setSets] = useState(null)
    let [setOneReps, setSetOneReps] = useState("")
    let [skillsTwo, setSkillsTwo] = useState("")
    let [skillsThree, setSkillsThree] = useState("")

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createPetSubmitHandler = (e)=>{
        e.preventDefault();

        let formInfoObj = {workoutName, type, sets, skillsOne, skillsTwo, skillsThree};

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
                    <input onChange = {(e)=>{setWorkoutName(e.target.value)}} type="text" workoutName="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.workoutName?.message}</p>
                </div>
                <div className="form-group col md-6  ">
                    <label htmlFor="">Type</label>
                    <input onChange = {(e)=>{setType(e.target.value)}} type="text" workoutName="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="form-group form-control form-control-lg">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setSets(e.target.value)}} type="text" workoutName="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.sets?.message}</p>
                </div>
                <div className="form-group ">
                    <label htmlFor="">Skills (Optional)</label>
                    <input onChange = {(e)=>{setOneReps(e.target.value)}} type="text" workoutName="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSkillsTwo(e.target.value)}} type="text" workoutName="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSkillsThree(e.target.value)}} type="text" workoutName="" id="" className="form-control" />
                </div>
                <input type="submit" value="Add Pet!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewWorkoutForm;