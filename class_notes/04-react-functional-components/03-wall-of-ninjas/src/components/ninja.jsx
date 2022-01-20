import React, { useState } from 'react';

const Ninja =(props)=>{
    let [ninjaName, setNinjaName] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let [favColor, setFavColor] = useState("");
    let [graduate, setGraduate] = useState(false);


    // let listOfNinjas = [];
    // create a state variable to store every ninja submitted in form
    let [listOfNinjas,setListOfNinjas] = useState([]);

    const createNinja = (e)=>{
        e.preventDefault(); // the default behavior of a form is to reload the page when submitting. This line prevents that. 
        console.log("Submitted the form")
        console.log(ninjaName,imageUrl,favColor)
        let ninjaObj = {ninjaName:ninjaName, imageUrl:imageUrl, favColor:favColor, graduate:graduate} //you can also just do let ninjaObj = {ninjaName, imageUrl, favColor} and it will work the same way
        console.log(ninjaObj);

        setListOfNinjas([...listOfNinjas, ninjaObj])
    }
    
    //graduate student function

    const toggleGraduation = (i)=> {
        // console.log("Testing checkbox")
        console.log("Checking i", i)
        
        let [...copyOfListOfNinjas] = listOfNinjas;
        copyOfListOfNinjas[i].graduate = !copyOfListOfNinjas[i].graduate

        console.log(listOfNinjas)
        setListOfNinjas(copyOfListOfNinjas);

    }
    
    return (
        <div>
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
        <hr />
        <h3>Here are our list of Ninjas!</h3>

        {
            listOfNinjas.map((ninja, i)=>{
                return (
                    <div key = {i} style = {{border: "1px solid black", backgroundColor: ninja.favColor, display: "inline-block", textDecoration: ninja.graduate? 'line-through': "none"}}>
                        <h1>{ninja.ninjaName}{i}</h1>
                        <p><img src={ninja.imageUrl} alt="" width = "200px" height = "200px"/></p>
                        <p>Favorite Color: {ninja.favColor}</p>
                        <p><input type="checkbox" name="" id="" onClick={()=>toggleGraduation(i)} />Graduate</p>
                    </div> 
                )
            })
        }
        </div>

    )
}

export default Ninja;