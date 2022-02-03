import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const AllWorkouts = (props) => {

    let [allWorkouts, setAllWorkouts] = useState([])
    let [deleted, setDeleted] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/fitness/")
            .then(res=>{
                console.log("Program response to retrieving all workouts===>", res)
                setAllWorkouts(res.data.results)
            })
            .catch(err=> console.log("ERROR", err))
    },[deleted, props.newWorkoutAdded ]) 
    
    return (
        <div>
            
            {allWorkouts.map((workoutObj, i)=>{
                return(
                    <div className='container' key={i} style = {{border: "1px solid black"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Workout</th>
                                    <th>Exercise</th>
                                    <th>Sets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h4>{workoutObj.workoutName}</h4></td>
                                    <td>{workoutObj.exercise}</td>
                                    <td>{workoutObj.sets}</td>
                                    <td><Link to={`/fitness/${workoutObj._id}`} className = "btn btn-info" >Details</Link> | &nbsp; 
                                        <Link to={`/fitness/edit/${workoutObj._id}`} className = "btn btn-warning" >Edit</Link> | &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )
            })}
        </div>
    );
};

export default AllWorkouts;