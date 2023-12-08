import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const DoneTasks = () => {

    const {response, error, loading} = useFetch({url: '/api/v1/donetasks', method: "GET"})

    const toDoList = response?.items.map(task => {
        return {
          name: task.name,
          id: task._uuid,
          isCompleted: true,
          contributor: task.contributor,
          deadline: task.deadline
        }
      }) || []

    if(loading) return <p className="loading">Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div className="done-tasks">
            <h2>Done Tasks</h2>
            <div className="task-list">
                
                {toDoList.map((todo) => 
                <div className="task-container">
                    <div className="task" key={todo.id}>
                        <h5>Task</h5>
                        <h5>Contributor</h5>
                        <h5>Deadline</h5>
                        <h3>{todo.name}</h3>
                        <h3>{todo.contributor}</h3>
                        <h3>{todo.deadline}</h3>
                    </div>
                <Link className="task-btn" to={`/update/${todo.id}`}>Edit</Link>
                </div>
                )}
            </div>
            <Link className="backto-btn" to="/">Back to To Do List</Link>
    
        </div>
    )
}



export default DoneTasks