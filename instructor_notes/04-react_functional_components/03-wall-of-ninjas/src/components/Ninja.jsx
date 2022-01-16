import React, {useState} from 'react';
import styles from './Ninja.module.css';

const Ninja = (props) =>{
    //creating state variable(s) to keep track of information collected on the form
    let [ninjaName, setNinjaName ] = useState("");
    let [imageUrl, setImageUrl ] = useState("");
    let [favColor, setFavColor ] = useState("");
    
    //this state variable to toggle their graduation status
    let [graduated, setGraduated] = useState(false)


    // let listOfNinjas = [];
    //create a state variable to store every ninjas that was submitted from the from
    let [listOfNinjas, setListOfNinjas] = useState([]);


    //this function runs when we submit the form
    const createNinja = (e)=>{
        e.preventDefault(); //the default behavior of a form when submitting is to reload the page and we are prventing that from happening b/c we don't want the page to reload
        console.log("submitted the form!")
        console.log(ninjaName,imageUrl, favColor)
        let ninjaObj = {ninjaName, imageUrl, favColor, graduated}
        console.log(ninjaObj);
        

        setListOfNinjas([...listOfNinjas,ninjaObj])

    }


    //toggle graduation for student function that gets called when the checkbox is clicked
    const toggleGraduation = (idx)=>{
        console.log("trying to graduate this student-> logging idx of student here: ", idx)

        //create a copy of list of ninjas and update the copy list of ninjas array at specific index of student we want to graduate to have their graduation property === true
        let [...copyOfListOfNinjas] = listOfNinjas;
        console.log("here is the list of ninjas copy->",copyOfListOfNinjas )

        //update the graduation status of the student to be the opposite of whatever it currently is (true->false or false->true)
        copyOfListOfNinjas[idx].graduated = !copyOfListOfNinjas[idx].graduated  

        console.log("here is the list of ninjas copy after updating it->",copyOfListOfNinjas )

        //update the state with this newly updated information
        setListOfNinjas(copyOfListOfNinjas);

        // setListOfNinjas(listOfNinjas)
    
    }

    


    return (
        <>
            <form onSubmit = {createNinja}>
                <div className="form-group">
                    <label htmlFor="">Ninja name:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setNinjaName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Url:</label>
                    <input type="text" name="imageUrl" id="" className="form-control" onChange = {(e)=>setImageUrl(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Color:</label>
                    <input type="text" name="" id="" className="form-control" onChange = {(e)=>setFavColor(e.target.value)}/>
                </div>
                <input type="submit" value="Create Ninja!" />
            </form>
            <hr />
            <h3>Here are our list of ninjas!</h3>

            {
                listOfNinjas.map((ninja, i)=>{
                    return (
                        <div className = {styles.ninja} key = {i} style = {{backgroundColor: ninja.favColor, textDecoration: ninja.graduated? 'line-through': 'none'}}>
                            <h1>{ninja.ninjaName}- Idx # {i}</h1>
                            <p><img src={ninja.imageUrl} alt="" width= "100px"/></p>
                            <p>Favorite color: {ninja.favColor}</p>
                            <p><input type="checkbox" name="" id="" onClick = {()=>toggleGraduation(i)}/>Graduate</p>
                        </div>
                    )
                })
            }


            {/* {% for ninja in listofninjas %}
                {{ninja.ninjaName}}
            {% endfor %} */}

        </>


    )
}


export default Ninja;