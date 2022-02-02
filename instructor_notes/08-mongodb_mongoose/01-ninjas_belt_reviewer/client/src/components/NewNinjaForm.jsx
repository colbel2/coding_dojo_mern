import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import io from 'socket.io-client';


const NewNinjaForm = (props) => {

    //state variables for each info collected from form
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(null)
    let [isVeteran, setIsVeteran] = useState(false)

    //state variable to store any validation errors coming from the backend after submitting the form
    let [formErrors, setFormErrors] = useState({})

    //if you have form in separate route than allninjas, you can use history to redirect after form submits
    const history = useHistory();


    const [socket] = useState(() => io(':8000')) //this line of code enables a client to connect to our server running on port 8000

    // socket.on("new_connection", data=>{
    //     console.log(data);
    // } )

    const createNinjaSubmitHandler = (e)=>{
        e.preventDefault(); //prevent the form from reloading the whole page

        // console.log(firstName, lastName, numBelts, isVeteran)

        //put the info from form into an object so that we can send one thing to the backend api
        let formInfoObj = {firstName, lastName, numBelts, isVeteran};

        axios.post("http://localhost:8000/api/ninjas", formInfoObj) //post request to our backend route in the ninja.routes.js file
            .then(res=>{
                console.log("response after posting", res)


                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form was not filled out properly 
                if(res.data.error){ //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                }else{
                    socket.emit("added_new_ninja", res.data.results)
                    //else if the form was filled out properly and it successfully created someone new, update the newNinjaAdded variable so that it triggers the allninjas component re-gather the new list of ninjas
                    props.setNewNinjaAdded(!props.newNinjaAdded)

                    //if the form was in separate route than all ninjas component, then you can redirect to "/" after form submits using history.push("/")
                    // history.push("/")
                }
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }
    const label = { inputProps: { 'aria-label': 'Is Veteran?' } };

    return (
        <div>
            <form onSubmit = {createNinjaSubmitHandler}>
                <div className="form-group">
                    {/* <input onChange = {(e)=>{setFirstName(e.target.value)}} type="text" name="" id="" className="form-control" /> */}
                    <TextField 
                        onChange = {(e)=>{setFirstName(e.target.value)}} 
                        style= {{width: "100%"}} 
                        id="outlined-basic" 
                        label="First Name" 
                        variant="outlined" 
                    />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                    {/* <p className="text-danger">{formErrors.firstName? formErrors.firstName.message : ""}</p> */}
                </div>
                <div className="form-group">
                    {/* <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>{setLastName(e.target.value)}} type="text" name="" id="" className="form-control" /> */}
                    <TextField 
                        onChange = {(e)=>{setLastName(e.target.value)}} 
                        style= {{width: "100%"}} 
                        id="outlined-basic" 
                        label="Last Name" 
                        variant="outlined" 
                    />
                    <p className="text-danger">{formErrors.lastName?.message}</p>

                </div>
                <div className="form-group">
                    {/* <label htmlFor="">Number of Belts</label>
                    <input onChange = {(e)=>{setNumBelts(e.target.value)}} type="number" name="" id="" className="form-control" /> */}
                    <TextField 
                        onChange = {(e)=>{setNumBelts(e.target.value)}} 
                        style= {{width: "100%"}} 
                        id="outlined-basic" 
                        label="Number of Belts" 
                        variant="outlined" 
                        type = "number"
                    />
                    <p className="text-danger">{formErrors.numBelts?.message}</p>

                </div>
                <div className="form-group">
                    {/* <label htmlFor="">Is Ninja a Veteran?</label>
                    <input onChange = {(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" /> */}
                    
                    <FormControlLabel control={<Checkbox 
                        {...label} 
                        icon={<MilitaryTechIcon/>}
                        checkedIcon={<MilitaryTechOutlinedIcon/>}
                    />} label="Is Veteran?" />
                </div>
                <Button type = "submit" variant="outlined" color="primary">Create Ninja!</Button>
            </form>
        </div>
    );
};

export default NewNinjaForm;