import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OneWorkout = () => {
    const { id } = useParams();

    const history = useHistory();

    const [workoutDetails, setworkoutDetails] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/fitness/${id}`)
        .then(res=>{
            console.log("Program response when looking for one workout details====>", res)
            setworkoutDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const deleteWorkout = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/fitness/${id}`)
            .then(res=>{
                console.log("Program adopting(deleting) Workout====>", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }
    


    return (
        <div>
            <button onClick = {deleteWorkout} className="btn btn-danger position-relative position-absolute bottom-75 end-0">Delete Workout</button>
            
            <h4>Details about {workoutDetails.workoutName}</h4>
            <div className='container' style = {{border: "1px solid black"}}>   
                <table>
                    <thead>
                        <tr>
                            <th>Workout</th>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Weight</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h4>{workoutDetails.workoutName}</h4></td>
                            <td>{workoutDetails.exercise}</td>
                            <td>{workoutDetails.sets}</td>
                            <td>{workoutDetails.setOneWeight}</td>
                            <td>{workoutDetails.setTwoWeight}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default OneWorkout;