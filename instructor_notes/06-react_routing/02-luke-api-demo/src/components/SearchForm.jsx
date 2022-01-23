import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const SearchForm = () => {
    let [categories, setCategories] = useState([])

    //state variable for each input in this form
    let [selectedCategory, setSelectedCat] = useState("people")
    let [id, setId] = useState(null)


    //initialize useHistory so we can do redirects
    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response=>{
            //console.log the response befoer doing anything else!!!!
            console.log("response--->", response)
            console.log(Object.keys(response.data)) //this gives an array of the keys from response.data (response.data has categories as keys)
            setCategories(Object.keys(response.data))
            // setSelectedCat(Object.keys(response.data)[0])
        })
        .catch(err=>{
            console.log("ERRORRRRRR ABORT!->", err)
        })
    },[])

    //function to run when the form submits
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log("submitted!")
        history.push(`/${selectedCategory}/${id}`) //redirect to a route. Example: localhost:3000/people/1

    }
    

    return (
        <div>
            <form onSubmit = {handleFormSubmit} className='d-flex justify-content-between'>
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select onChange = {(e)=>{setSelectedCat(e.target.value)}} className= "form-select " name="" id="">
                        {
                            categories.map((cat,i)=>{
                                return(
                                    <option key = {i} value={cat}>{cat}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input onChange = {(e)=>{setId(e.target.value)}} type="number" name="" id="" className="form-control" />
                </div>
                <input type="submit" value="Search!" className="btn btn-success" />
            </form>
        </div>
    );
};


export default SearchForm;