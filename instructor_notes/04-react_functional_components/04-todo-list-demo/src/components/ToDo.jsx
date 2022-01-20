import React, {useState} from 'react';

const ToDo = () => {

    //creating state variable for each input way
    // let [task, setTask] = useState('')
    // let [dueDate, setDueDate] = useState('')
    // let [location, setLocation] = useState('')


    //1- create an object to keep track of form info and give it keys that correlate to the form inputs i want to collect info from. Make sure that these keys are also used as the names of the inputs in the form! No matchy no worky.
    let [taskObj, setTaskObj] = useState({
        task:"",
        dueDate: "",
        location: "",
        isComplete: false
    })

    //state variable array to keep all the to do task objects in
    let [listOftasks, setListOfTasks] = useState([])

    //2- create a function that we can attach to the onChange event listeners
    const changeHandler = (e)=>{
        console.log("logging e-->", e.target.name)

        setTaskObj({
            ...taskObj,
            [e.target.name]: e.target.value
        })
    }


    //when the form submits, run this function below
    const addTask = (e)=>{
        e.preventDefault(); //prevent the form submission from reloading the whole page

        console.log("submitting the task!!", taskObj )

        //add the taskObj containing the information collected from the from into an array of tasks
        setListOfTasks([...listOftasks, taskObj])

        //to clear out form- step 1: clear out the state varirable that collects the form info
        setTaskObj({
            task:"",
            dueDate: "",
            location: "",
            isComplete: false
        }) //then next step is to give each input a value that is connected to this state variable
    }



    //toggle task isComplete property
    const toggleTaskComplete = (indexNum)=>{
        console.log("toggling the task at index-->", indexNum)

        //to modify the arry of tasks we will make a copy of the array first
        let [...copyOfList] = listOftasks;

        //modify the copy at specific index number
        copyOfList[indexNum].isComplete = !copyOfList[indexNum].isComplete;

        //update our state variable with this modified copy
        setListOfTasks(copyOfList);
    }


    //deleting a task
    const deleteTask = (indexNum)=>{
        console.log("deleting the task at index-->", indexNum)

        //use filter to delete. filter through the array of tasks and only return the ones whose index number does not match the indexNum of the task we want to delete
        let newList = listOftasks.filter((taskObj, i)=>{
            return i != indexNum
        })

        //update the state variable with this new filtered list that contains one less task
        setListOfTasks(newList);

    }


    return (
        <div>
           <h3>Add a task below</h3> 
           <form onSubmit = {addTask}>
               <div className="form-group">
                   <label htmlFor="">Task:</label>
                   <input onChange = {changeHandler} type="text" name="task" id="" className="form-control" value = {taskObj.task}/>
               </div>
               <div className="form-group">
                   <label htmlFor="">Due Date</label>
                   <input onChange = {changeHandler}  type="date" name="dueDate" id="" className="form-control" value = {taskObj.dueDate} />
               </div>
               <div className="form-group">
                   <label htmlFor="">Location</label>
                   <input onChange = {changeHandler} type="text" name="location" id="" className="form-control"  value = {taskObj.location}/>
               </div>
               <input type="submit" value="Add Task" className="btn btn-success mt-3" />
           </form>

           <hr />
           {
               listOftasks.map((taskItem,i)=>{
                   return (
                       <div key = {i} style = {{textDecoration: taskItem.isComplete? "line-through": ""}}>
                           <h3>{taskItem.task}</h3>
                           <p>Due date: {taskItem.dueDate}</p>
                           <p>Location: {taskItem.location}</p>
                           <p><input onClick = {()=>toggleTaskComplete(i)} type="checkbox" name="" id="" /></p>
                           <p>{taskItem.isComplete==true? "Completed! Great work": "Not yet"}</p>
                           <p><button onClick = {()=>deleteTask(i)} className="btn btn-danger">Delete Task</button></p>
                       </div>
                   )
               })
           }
        </div>
    );
};

export default ToDo;