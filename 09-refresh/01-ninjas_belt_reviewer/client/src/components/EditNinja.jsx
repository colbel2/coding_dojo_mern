import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const EditNinja = () => {

    const { id } = useParams();

    let [ninjaInfo, setNinjaInfo] = useState({})

    useEffect(() => {

        axios.get(`http://localhost:8000/api/oneNinja/${id}`)
            .then(res => {
                console.log("response is this-->", res)
                setNinjaInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e) => {
        console.log("changed in form detected!!")
        if (e.target.type === "checkbox") { //handle checkbox input slightly differently with the e.target.checked instead of e.target.value
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.checked
            })
        } else {
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.value
            })

        }
    }

    const updateNinjaSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/update/${id}`, ninjaInfo)
            .then(res => {
                console.log("res after put request-->", res)
                history.push("/")
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h4>Edit Ninja Below</h4>
            <form onSubmit={updateNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={ninjaInfo.firstName}
                        onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={ninjaInfo.lastName}
                        onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number"
                        name="numBelts"
                        className="form-control"
                        value={ninjaInfo.numBelts}
                        onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input
                        type="checkbox"
                        name="isVeteran"
                        className="form-checkbox"
                        checked={ninjaInfo.isVeteran}
                        onChange={changeHandler} />
                </div>
                <input type="submit" value="Update Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};


export default EditNinja;




    // let [firstName, setFirstName] = useState("")
    // let [lastName, setLastName] = useState("")
    // let [numBelts, setNumBelts] = useState(0)
    // let [isVeteran, setIsVeteran] = useState(false)

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(firstName, lastName, numBelts, isVeteran);

    //     let formInfoObj = { firstName: firstName, lastName: lastName, numBelts: numBelts, isVeteran: isVeteran }
    //     console.log(formInfoObj)
    //     axios.post("http://localhost:8000/api/create/ninja", formInfoObj)
    //         .then(res => {
    //             console.log("response after post request", res)
    //         })
    //         .catch(err => console.log("error in submitting post request", err))
    // }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <div className="form-group">
//                     <label htmlFor="">First Name</label>
//                     <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="" id="" className="formcontrol" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="">Last Name</label>
//                     <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="" id="" className="formcontrol" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="">Number of Belts</label>
//                     <input onChange={(e) => { setNumBelts(e.target.value) }} type="number" name="" id="" className="formcontrol" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="">Are You a Veteran?</label>
//                     <input onChange={(e) => { setIsVeteran(e.target.checked) }} type="checkbox" name="" id="" className="formcontrol" />
//                 </div>
//                 <input type="submit" value="Update Ninja" className="btn btn-success mt-3" />
//             </form>
//         </div>
//     );
// };


