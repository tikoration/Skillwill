import { useState, useRef, useEffect } from "react"
import ToDo from "./ToDo"
import Done from "./Done"

function ToDoList(){

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])
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

        const task = {
            id:  tasks.length + 1,
            name: inputValue
        }
        setInputValue("")
        setTasks((prevState) => [task, ...prevState])
    }

   const  markAsDone = (id) => {
        
        const leftList = []
        tasks.forEach(task => {
            if(task.id === id){
                setDoneTasks((prevState) => [task, ...prevState])
            } else {
                leftList.push(task)
            }
        })
        setTasks(leftList)
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
                    <h1>To Do List</h1>
                    {tasks.map((task) => (
                            <ToDo
                                key = {task.id}
                                id={task.id}
                                name={task.name}
                                action={markAsDone}
                            />
                        ))
                    }
                </div>
                <div className="done-list">
                    <h1>Done</h1>
                    {
                    doneTasks.map((task) => (
                            <Done 
                                key = {task.id}
                                id = {task.id}
                                name={task.name}
                                action = {removeTask}
                                move = {returnTask}
                            />
                    )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default ToDoList