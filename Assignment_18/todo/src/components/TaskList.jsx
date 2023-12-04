import { useState } from "react"

const TaskList = ({onFormSubmit}) => {

    const [task, setTask] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(task)
    }

    const clear = () => {
        document.getElementById('form-input').value=''
    }
   
    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    onChange={e => setTask(e.target.value)}
                    id="form-input"
                />         
                <button type="submit" onClick={clear}>Add Task</button>
            </form>
        </>
    )
}

export default TaskList