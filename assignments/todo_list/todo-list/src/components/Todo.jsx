import React, { useState } from 'react';

const Todo = () => {


    let [taskObj, setTaskObj] =useState({
        task:"",
        isComplete: false
    })

    let [listOfTasks, setListOfTasks] = useState([])

const changeHandler = (e)=>{
    setTaskObj({
        ...taskObj,
        [e.target.name]: e.target.value
    })
}

const addTask = (e)=>{
    e.preventDefault()
    setListOfTasks([...listOfTasks, taskObj])
    setTaskObj({
        task:"",
        isComplete: false
    })
}

const toggleTaskComplete = (indexNum)=>{
    console.log("toggle task at index ==>",indexNum);
    let [...copyOfList] = listOfTasks;
    copyOfList[indexNum].isComplete = !copyOfList[indexNum].isComplete;
    setListOfTasks(copyOfList);
}

const deleteTask = (indexNum)=>{
    console.log("Deleting the task at index ==>", indexNum);
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
                <input type="submit" value="Add Task" className="btn btn-success mt-3" />
            </form>
            <hr />
            {
                listOfTasks.map((taskItem,i)=>{
                    return (
                        <div key={i} style = {{textDecoration: taskItem.iscomplete ? "line-through": ""}}>
                            <h3>{taskItem.task}</h3>
                            <p><input onClick = {()=>toggleTaskComplete(i)} type="checkbox" name="" id="" /></p>
                            <p>{taskItem.isComplete==true? "Completed! Good Job!":"Not Complete Yet"}</p>
                            <p><button onClick = {()=>deleteTask(i)} className='btn btn-danger' >Delete Task</button></p>
                        </div>
                    )
                }
                )
            }
        </div>
    );
};


export default Todo;