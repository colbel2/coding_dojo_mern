import React, { useState } from 'react';

const ColorBox =(props)=>{
    let [color, setColor] = useState("");

    // let listOfNinjas = [];
    // create a state variable to store every ninja submitted in form
    let [listOfColors,setListOfColors] = useState([]);

    const createColorBox = (e)=>{
        e.preventDefault(); // the default behavior of a form is to reload the page when submitting. This line prevents that. 
        console.log("Submitted the form")
        console.log(color)
        let colorObj = {color} //you can also just do let ninjaObj = {ninjaName, imageUrl, favColor} and it will work the same way
        console.log(colorObj);

        setListOfColors([...listOfColors, colorObj])
    }
    
    
    
    return (
        <div>
        <form onSubmit={createColorBox}>
            <div className="form-group">
                <label htmlFor="">Color:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>setColor(e.target.value)}/>
            </div>
            
            <input type="submit" value="Add" />
        </form>
        <hr />
        <h3>Here are our color boxes!</h3>

        {
            listOfColors.map((color)=>{
                return (
                    <div style = {{border: "1px solid black", backgroundColor: color.color, display: "inline-block"}}>
                        
                        <p><img src={color.imageUrl} alt="" width = "200px" height = "200px"/></p>
                    </div> 
                )
            })
        }
        </div>

    )
}

export default ColorBox;