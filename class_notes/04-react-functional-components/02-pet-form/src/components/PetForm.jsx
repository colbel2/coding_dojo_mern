import React, { useState } from  'react';

const PetForm = (props) => {

    let [name, setName] = useState("")
    let [age, setAge] = useState(null)
    let [breed, setBreed] = useState("")
    let [hair, setHair] = useState(null)
    return (
        <div>
            <h1>Make a grooming appointment for your pets</h1>
            <form action="">
                <div className="formgroup">
                    <label htmlFor="">Name: </label>
                    <input type="text" name="" id='' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    {
                        name.length < 2?
                    
                    <p className='text-danger'>Name must be atleast 2 characters. Right now the name length is {name.length} </p>:
                    ""
                    }

                    
                </div>
                <div className="formgroup">
                    <label htmlFor="">Age: </label>
                    <input type="number" name="" id='' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                    {
                        age < 0 || age > 100?
                        <p className="text-danger">Age must be between 0 - 100. Age can't be greater than 100.</p>:
                    ""}

                </div>
                <div className="formgroup">
                    <label htmlFor="">Breed: </label>
                    <input type="text" name="" id='' className='form-control' onChange={(e)=>setBreed(e.target.value)} />
                </div>
                <div className="formgroup">
                    <label htmlFor="">Hair Length: </label>
                    <select name="" id="" className ='form-select' onChange={(e)=>setHair(e.target.value)}>
                        <option value="N/A">N/A</option>
                        <option value="Less than 2">Less than 2 inches</option>
                        <option value="More than 2 inches">More than 2 inches</option>
                    </select>
                </div>
                <input type="submit" value="Reserve"/>
            </form>
            <hr />
            <p>Pet Name: {name}</p>
            <hr />
            <p>Pet Age: {age}</p>
            <hr />
            <p>Pet Breed: {breed}</p>
            <hr />
            <p>Pet Hair Length: {hair}</p>
        </div>
    )
}

export default PetForm;