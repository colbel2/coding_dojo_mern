import React, { useState} from 'react';

const Form = (props) => {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div>
            <h1>Enter User Info</h1>
            <form action="">
                <div className='formgroup'>
                    <label htmlFor="">First Name: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <hr />
            <p>First Name: {firstName}</p>
            <hr />
            <p>Last Name: {lastName}</p>
            <hr />
            <p>Email: {email}</p>
            <hr />
            <p>Password:{password}</p>
            <hr />
            <p>Confirm Password: {confirmPassword}</p>
            <hr />
        </div>
    )
}

export default Form;