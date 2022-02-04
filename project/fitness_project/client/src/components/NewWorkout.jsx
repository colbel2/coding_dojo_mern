import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewWorkoutForm = (props) => {

    let [workoutName, setWorkoutName] = useState("")
    let [exercise, setExercise] = useState("")
    let [sets, setSets] = useState(null)
    let [setOneReps, setSetOneReps] = useState(null)
    let [setTwoReps, setSetTwoReps] = useState(null)
    let [setThreeReps, setSetThreeReps] = useState(null)
    let [setFourReps, setSetFourReps] = useState(null)
    let [setFiveReps, setSetFiveReps] = useState(null)
    let [setSixReps, setSetSixReps] = useState(null)
    let [setOneWeight, setSetOneWeight] = useState(null)
    let [setTwoWeight, setSetTwoWeight] = useState(null)
    let [setThreeWeight, setSetThreeWeight] = useState(null)
    let [setFourWeight, setSetFourWeight] = useState(null)
    let [setFiveWeight, setSetFiveWeight] = useState(null)
    let [setSixWeight, setSetSixWeight] = useState(null)
    let [date, setDate] = useState("")
    let [notes, setNotes] = useState("")

    
    
    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();
    console.log("TESTING: IT WORKED")

    const createFitnessSubmitHandler = (e)=>{
        e.preventDefault();

        let formInfoObj = {workoutName, exercise, sets, setOneReps, setTwoReps, setThreeReps, setFourReps, setFiveReps, setSixReps, setOneWeight, setTwoWeight, setThreeWeight, setFourWeight, setFiveWeight, setSixWeight, notes, date};

        axios.post("http://localhost:8000/api/fitness", formInfoObj)
            .then(res=>{
                console.log("Post request respons===>", res)

                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }
                else{
                    console.log("TESTING: IT WORKED")
                    history.push("/")
                }
            })
            .catch(err=>console.log("Request ERROR!! Re-submit",err))  
    }

    return (
        <div>
            <form className='row g-3' onSubmit = {createFitnessSubmitHandler}>
                <div className="form-group col md-6 ">
                    <label htmlFor="">Workout</label>
                    <input onChange = {(e)=>{setWorkoutName(e.target.value)}} type="text" name="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.workoutName?.message}</p>
                </div>
                <div className="form-group col md-6  ">
                    <label htmlFor="">Exercise</label>
                    <input onChange = {(e)=>{setExercise(e.target.value)}} type="text" name="" id="" className="form-control col" />
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="form-group form-control form-control-lg">
                    <label htmlFor="">Sets</label>
                    <input onChange = {(e)=>{setSets(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.sets?.message}</p>
                </div>
                <div className="form-group ">
                    <label htmlFor="">Weight</label>
                    <input onChange = {(e)=>{setSetOneWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetTwoWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetThreeWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetFourWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetFiveWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetSixWeight(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group ">
                    <label htmlFor="">Reps</label>
                    <input onChange = {(e)=>{setSetOneReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetTwoReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetThreeReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetFourReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetFiveReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <input onChange = {(e)=>{setSetSixReps(e.target.value)}} type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlfor="">Notes</label>
                    <input onChange={(e)=>{setNotes(e.target.value)}} type="text" className='form-control'/>
                </div>
                <input type="submit" value="Submit Workout" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewWorkoutForm;