import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditWorkoutForm = () => {

    const { id } = useParams();

    let [workoutInfo, setWorkoutInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/fitness/${id}`)
        .then(res=>{
            console.log("Program response to selected workout", res)
            setWorkoutInfo(res.data.results)
        })
        .catch(err=> console.log(err))
    },[])

    const history = useHistory();

    const changeHandler = (e)=>{
        console.log("ALERT: The form has changed!!")
        if(e.target.type === "control"){
            setWorkoutInfo({
                ...workoutInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setWorkoutInfo({
                ...workoutInfo,
                [e.target.name]: e.target.value
            })
        }
    }
    
    const updateWorkoutSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/fitness/${id}`, workoutInfo)
            .then(res=>{
                console.log("Put request complete!===>", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div class="form-style-2">
            <div class="form-style-2 heading">Edit</div>
            <form onSubmit = {updateWorkoutSubmitHandler}>
                {/* <div className="form-group"> */}
                    <label for="field1"><span>Workout<span class = "required">*</span></span>
                    <input 
                        type="text" 
                        name="name" 
                        class="input-field"
                        name="field1"
                        value={workoutInfo.workoutName} 
                        onChange={changeHandler}/>
                        </label>
                {/* </div> */}
                <div className="form-group">
                    <label htmlFor="">Exercise</label>
                    <input 
                        type="text" 
                        name="type"
                        className="form-control" 
                        value={workoutInfo.exercise} 
                        onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Sets</label>
                    <input type="text" 
                        name="description"
                        className="form-control" 
                        value={workoutInfo.sets} 
                        onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">setOneWeight</label>
                    <input 
                        type="text" 
                        name="skillsOne"
                        className="form-control" 
                        value={workoutInfo.setTwoWeight} 
                        onChange={changeHandler} />
                    <input 
                        type="text" 
                        name="skillsTwo"
                        className="form-control" 
                        value={workoutInfo.setThreeWeight} 
                        onChange={changeHandler} />
                    <input 
                        type="text" 
                        name="skillsThree"
                        className="form-control" 
                        value={workoutInfo.setFourWeight}  
                        onChange={changeHandler} />
                </div>
                <input type="submit" value="Edit Workout" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditWorkoutForm;