import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const ProjectManagerForm = (props) => {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState("")
    let [description, setDescription] = useState(null)

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const createProjectManagerHandler = (e)=>{
        e.preventDefault(); //prevent the form from reloading the whole page


        let formInfoObj = {title, price, description};

        axios.post("http://localhost:8000/api/projectmanager", formInfoObj) 
            .then(res=>{
                console.log("response after posting", res)

                if(res.data.error){ //validation errors happened
                    //res.data.error.errors contains an object that has my validation error messages for each input
                    setFormErrors(res.data.error.errors)
                }else{
                    //else if the form was filled out properly and it successfully created someone new, update the newNinjaAdded variable so that it triggers the allninjas component re-gather the new list of ninjas
                    props.setProjectManagerAdded(!props.newProjectManagerAdded)

                    //if the form was in separate route than all ninjas component, then you can redirect to "/" after form submits using history.push("/")
                    // history.push("/")
                }
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <form onSubmit = {createProjectManagerHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input onChange = {(e)=>{setTitle(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.Title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input onChange = {(e)=>{setPrice(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.price?.message}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange = {(e)=>{setDescription(e.target.value)}} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.description?.message}</p>

                </div>
                <input type="submit" value="Create" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default ProjectManagerForm;