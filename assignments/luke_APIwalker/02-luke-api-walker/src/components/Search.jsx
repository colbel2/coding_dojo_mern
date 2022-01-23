import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Search = () => {
    let [options, setOptions] = useState([])

    let [selectedOpt, setSelectedOpt] = useState("people")
    let [id, setId] = useState(null)


    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            console.log("response--->", response)
            console.log(Object.keys(response.data))
            setOptions(Object.keys(response.data))
        })
        .catch(err=>{
            console.log("ERRORRRRRR ABORT!->", err)
        })
    },[])

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log("submitted!")
        history.push(`/${selectedOpt}/${id}`) 

    }
    

    return (
        <div>
            <form onSubmit = {handleFormSubmit} className='d-flex justify-content-between'>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select onChange = {(e)=>{setSelectedOpt(e.target.value)}} className= "form-select " name="" id="">
                        {
                            options.map((opt,i)=>{
                                return(
                                    <option key = {i} value={opt}>{opt}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input onChange = {(e)=>{setId(e.target.value)}} type="number" name="" id="" className="form-control" />
                </div>
                <input type="submit" value="Search" className="btn btn-success" />
            </form>
        </div>
    );
};


export default Search;