import { useState, useRef, useEffect } from "react"
import ToDo from "./ToDo"
import Done from "./Done"
import InProgress from "./InProgress"
import {nanoid} from "nanoid"

function ToDoList(){

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])
    const [inProgress, setInProgress] = useState([])
    const ref = useRef(0)

    useEffect(() => {
        ref.current.focus()
    },[])


    const onChange = (event) => {
        const value = event.target.value;
        setInputValue(value)
      }

    const addTask = (event) => {
        event.preventDefault()
        
        let task
        if(inputValue !== ""){
            task = {
                id:  nanoid(),
                name: inputValue
            }
        }

        setInputValue("")
        if(task){
            setTasks((prevState) => [task, ...prevState])
        }
        
    }

    const moveToInProgress = (id) => {
        const leftList = []
        tasks.forEach(task => {
            if(task.id === id){
                setInProgress((prevState) => [task, ...prevState])
            } else {
                leftList.push(task)
            }
        })
        setTasks(leftList)
    }

   const  markAsDone = (id) => {
        
        const leftList = []
        const leftList2 = []
        inProgress.forEach(task => {
            if(task.id === id){
                setDoneTasks((prevState) => [task, ...prevState])
            } else {
                leftList.push(task)
            }
        })
        tasks.forEach(task => {
            if(task.id === id){
                setDoneTasks((prevState) => [task, ...prevState])
            } else {
                leftList2.push(task)
            }
        })
        setInProgress(leftList)
        setTasks(leftList2)
    }

    const removeTask = (id) => {
        const removedList = doneTasks.filter(task => task.id !== id)
        setDoneTasks(removedList)
    }
    
    const returnTask = (id) => {
        const returnVal = doneTasks.filter(task => task.id === id)
        returnVal.push(...tasks)
        const leftVal = doneTasks.filter(task => task.id !== id)
        setTasks(returnVal)
        setDoneTasks(leftVal)
    }
    
    return(
        <div> 
            <form onSubmit={addTask}>
                <input 
                    ref={ref}
                    type="text"
                    onChange={onChange}
                    value={inputValue}
                />
                <button type="submit">Add Task</button>
            </form>
            <div className="lists">
                <div className="to-do-list">
                <span className="title" style={{borderColor: "#ed4a32"}}><h1 className="title-name">To Do List</h1><h1>{tasks.length}</h1></span>
                    {tasks.map((task, index) => (
                            <ToDo
                                key = {task.id}
                                id={task.id}
                                name={task.name}
                                action={moveToInProgress}
                                done={markAsDone}
                                index={index}
                            />
                        ))
                    }
                </div>
                <div className="in-progress-list">
                <span className="title" style={{borderColor: "#efca16"}}><h1 className="title-name">In Progress</h1><h1>{inProgress.length}</h1></span>
                    {
                        inProgress.map((task, index) =>(
                            <InProgress
                                key = {task.id}
                                id={task.id}
                                name={task.name}
                                action={markAsDone}
                                index={index}
                                />
                        ))
                    }
                </div>
                <div className="done-list">
                    <span className="title" style={{borderColor: "#91cf55"}}><h1 className="title-name">Done</h1><h1>{doneTasks.length}</h1></span>
                    {
                    doneTasks.map((task, index) => (
                            <Done 
                                key = {task.id}
                                id = {task.id}
                                name={task.name}
                                action = {removeTask}
                                move = {returnTask}
                                index={index}
                            />
                    )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoList