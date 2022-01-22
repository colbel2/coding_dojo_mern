import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';


const Search = () => {
    let[options,setOptions] = useState([])
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
    .then(response=>{
        console.log("response====>",response)
        Object.keys(response.data)
        console.log(response.data)
        setOptions(Object.keys(response.data))

    })
    .catch(err=>{
        console.log("Error ABORT!===>",err)
    })
    }, [])
    

    return (
        <div>
            <form className="d-flexjustify-content-between"action="">
                <div className="form-group">
                    <label htmlFor="">Search For:</label>
                    <select className="form-select" name="" id="">
                        {options.map((opt,i)=>{
                            return(
                                <option key={i} value={opt}>{opt}</option>
                            )
                        })}
                        {/* <option value="">people</option>
                        <option value="">planets</option>
                        <option value="">films</option>
                        <option value="">species</option>
                        <option value="">vehicles</option>
                        <option value="">starships</option> */}
                    </select>
                </div>
                <div className="form-group">

                    <label htmlFor="">ID:</label>
                    <input type="number" name="" id="" className="form-control" />
                </div>
            </form>
        </div>
    );
};



export default Search;