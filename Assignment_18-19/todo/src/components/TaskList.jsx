import { useRef } from "react"

const TaskList = ({onFormSubmit, name, contributor, deadline, isCompleted}) => {

    const taskRef = useRef()
    const deadlineRef = useRef()
    const contributorRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        if(taskRef.current && contributorRef.current && deadlineRef.current){
            onFormSubmit(taskRef.current.value, contributorRef.current.value, deadlineRef.current.value, isCompleted = false)
        }
    }
   
    return( 
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Task name"
                    id="form-input"
                    ref={taskRef}
                    defaultValue={name}
                /> 
                <input 
                    type="text"
                    placeholder="Contributor"
                    ref={contributorRef}
                    defaultValue={contributor}
                /> 
                  <input 
                    type="text"
                    placeholder="Deadline"
                    ref={deadlineRef}
                    defaultValue={deadline}
                /> 
                <button className="task-btn" type="submit">Add Task</button>
            </form>
        </>
    )
}

export default TaskList