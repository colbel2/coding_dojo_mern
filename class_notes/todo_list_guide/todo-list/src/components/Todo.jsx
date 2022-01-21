import React, { useState } from 'react';

const Todo = () => {

    // let[task, setTask] = useState('');
    // let[dueDate, setDueDate] = useState('');
    // let[location, setLocation] = useState('');
    let [taskObj, setTaskObj] =useState({
        task:"",
        dueDate:"",
        location:"",
        isComplete: false
    })

    let [listOfTasks, setListOfTasks] = useState([])

const changeHandler = (e)=>{
    console.log("loggin e-->", e.target.name)
    setTaskObj({
        ...taskObj,
        [e.target.name]: e.target.value
    })
}

const addTask = (e)=>{
    e.preventDefault()
    console.log("Submitting the task", taskObj)
    setListOfTasks([...listOfTasks, taskObj])
    setTaskObj({
        task:"",
        dueDate:"",
        location:"",
        isComplete: false
    })
}

const toggleTaskComplete = (indexNum)=>{
    console.log("toggle tast at index ==>",indexNum)
    let [...copyOfList] = listOfTasks;
    copyOfList[indexNum].isComplete = !copyOfList[indexNum].isComplete;
    setListOfTasks(newList);
}

const deleteTask = (indexNum)=>{
    console.log("Deleting the task at index ==>", indexNum)
    let newList = listOfTasks.filter((taskObj, i)=>{
        return i != indexNum

    
    })
    setListOfTasks(newList);
}

    return (
        <div>
            <h2>Add a task below</h2>
            <form onSubmit={addTask}>
                <div className="form group">
                    <label htmlFor="">Task:</label>
                <input onChange= {changeHandler} type="text" name="task" id="" className='form-control' value = {taskObj.task} />
                </div>
                <div className="form group">
                    <label htmlFor="">Due Date:</label>
                    <input onChange={changeHandler} type="date" name="dueDate" className="form-control" value ={taskObj.dueDate} />
                </div>
                <div className="form group">
                    <label htmlFor="">Location:</label>
                    <input onChange={changeHandler} type="text" name="location" id="" className="form-control" value = {taskObj.location}/>
                </div>
                <input type="submit" value="Add Task" className="btn btn-success mt-3" />
            </form>
            <hr />
            {
                listOfTasks.map((taskItem,i)=>{
                    return (
                        <div key={i} style = {{textDecoration: taskItem.iscomplete ? "line-through": ""}}>
                            <h3>{taskItem.task}</h3>
                            <p>Due Date: {taskItem.dueDate}</p>
                            <p>Location: {taskItem.location}
                            <p><input onClick={()=>toggleTaskComplete(i)} type="checkbox" name="" id="" /></p></p>
                            <p>{taskItem.isComplete==true? "Completed! Good Job!":"Not Complete Yet"}</p>
                            <p><button onClick = {()=>deleteTask(i)} className='btn btn-danger' >Delete Task</button></p>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default Todo;