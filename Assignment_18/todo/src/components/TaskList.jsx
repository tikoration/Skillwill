import { useState } from "react"

const TaskList = ({onFormSubmit}) => {

    const [task, setTask] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(task)
    }
   
    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    onChange={e => setTask(e.target.value)}
                />
                <button> Add Task</button>
            </form>
        </>
    )
}

export default TaskList