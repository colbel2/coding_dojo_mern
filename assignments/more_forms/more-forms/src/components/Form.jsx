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
                
                {
                    firstName.length < 2?
                    <p className='text-danger'>First name must be atleast 2 characters. Right now the first name is {firstName.length}</p>:
                    ""
                }
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setLastName(e.target.value)}/>
                
                    {
                    lastName.length < 2?
                    <p className='text-danger'>last name must be atleast 2 characters. Right now the last name is {lastName.length}</p>:
                    ""
                }
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                
                    {
                    email.length < 5?
                    <p className='text-danger'>Email must be atleast 5 characters. Right now the email is {email.length}</p>:
                    ""
                }
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Password: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                
                    {
                    password.length < 8?
                    <p className='text-danger'>Password must be atleast 8 characters. Right now the password is {password.length}</p>:
                    ""
                    
                }
                </div>
                <div className='formgroup'>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" name="" id="" className='form-control' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    {
                    password != confirmPassword?
                    <p className='text-danger'>Password must match confirm password</p>:
                    ""
                    }  
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