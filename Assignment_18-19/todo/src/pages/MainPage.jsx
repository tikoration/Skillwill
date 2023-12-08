import { Link, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const MainPage = () => {

    const {response, error, loading, resendReqeust} = useFetch({url: '/api/v1/tasks', method: "GET"})
    const {sendRequest} = useRequest({method: "DELETE"})
    const {sendRequest: sendRequestForDone} = useRequest({url: "/api/v1/donetasks", method: "POST"})
    const navigate = useNavigate()

    const toDoList = response?.items.map(task => {
      return {
        name: task.name,
        id: task._uuid,
        isCompleted: task.isCompleted,
        contributor: task.contributor,
        deadline: task.deadline
      }
    }) || []

    const onDelete = (id) => {
      sendRequest(null, `/api/v1/tasks/${id}`)
      .then(() => resendReqeust())
    }
    const onDone = (id) => {

      toDoList.forEach(task => {
        if(task.id === id){
          sendRequestForDone([{
            name: task.name, 
            contributor: task.contributor,
            deadline: task.deadline,
            isCompleted: task.isCompleted
          }])
          .then(() => sendRequest(null, `/api/v1/tasks/${id}`))
          .then(() => navigate('/donetasks'))
        }
      })
    }

    if(loading) return <p className="loading">Loading...</p>
    if(error) return <p>{error}</p>

    return(
        <div className="App">
            {toDoList.map((todo) =>
            <div className="task-container"> 
              <div className="task" key={todo.id}>
                  <h5>Task</h5>
                  <h5>Contributor</h5>
                  <h5>Deadline</h5>
                  <h3>{todo.name}</h3>
                  <h3>{todo.contributor}</h3>
                  <h3>{todo.deadline}</h3>
                  <Link className="task-btn" to={`/update/${todo.id}`}>Edit</Link>
                  <button className="task-btn" onClick={() => onDone(todo.id)}>Done</button>
                  <button className="task-btn" onClick={() => onDelete(todo.id)}>Delete</button>
              </div>
            </div>
            )}
        </div>
    )
}

export default MainPage