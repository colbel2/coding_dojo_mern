import React, { useState } from 'react';

const Ninja =(props)=>{
    let [ninjaName, setNinjaName] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let [favColor, setFavColor] = useState("");

    const createNinja = (e)=>{
        e.preventDefault(); // the default behavior of a form is to reload the page when submitting. This line prevents that. 
        console.log("Submitted the form")
        console.log(ninjaName,imageUrl,favColor)
    }
    
    
    
    return (
        <form onSubmit={createNinja}>
            <div className="form-group">
                <label htmlFor="">Ninja Name:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>setNinjaName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Image Url:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Favorite Color:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>setFavColor(e.target.value)}/>
            </div>
            <input type="submit" value="Create Ninja!" />
        </form>
    )
}

export default Ninja;