import React, { useState } from  'react';

const PetForm = (props) => {

    let [name, setName] = useState(""); //step 1 create a state variable
    let [age, setAge] = useState(null);
    let [breed, setBreed] = useState(null);
    let [hairlength, setHairLength] = useState(null);



    return (
        <div>
            <h1>Make a grooming appointment for your fur babies</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    {/*Step 2- attach an onchange event to the input and use the setter of the state variabel to update the state variable to be the value stored in the input */}
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setName(e.target.value)} />

                    {
                        name.length < 2
                            ?<p className="text-danger">Name must be at least 2 characters. Right now, name's length is {name.length}</p>
                            :""
                    }

                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Age: </label>
                    <input type="number" name="" id="" className="form-control" onChange= {(e)=> setAge(e.target.value)} />
                    {
                        age < 0 || age > 100
                        ?<p className="text-danger">Age must be between 0-100. Age cant be greater than 100 we dont want to break your pet by accident</p>
                        : ""

                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Breed: </label>
                    <input type="text" name="" id="" className="form-control" onChange= {(e)=> setBreed(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Hair length: </label>
                    <select name="" id="" className='form-select' onChange= {(e)=> setHairLength(e.target.value)}>
                        <option value="N/A">N/A</option>
                        <option value="Less than 2 inches">Less than 2 inches</option>
                        <option value="More than 2 inches">More than 2 inches</option>
                    </select>
                </div>
                <input type="submit" value="Reserve!" />
            </form>
            <hr />

            {/* step 3- Display the state variable on bottom of page */}
            <p>Pet Name: {name} </p>
            <p>Pet Age: {age}</p>
            <p>Pet Breed: {breed}</p>
            <p>Hair length: {hairlength}</p>


        </div>
        
    )

}


export default PetForm;