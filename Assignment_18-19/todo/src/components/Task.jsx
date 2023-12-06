import { useState } from "react"

const Task = ({task}) => {

    const [completed, setCompleted] = useState(task.isCompleted)

    return(
        <div className="task" key={task.id}>
            <h3>{task.name}</h3>
            <button onClick={() => setCompleted(!completed)}>Done</button>
            {completed && <h4>Completed!</h4>}
         </div>
    )
}

export default Task