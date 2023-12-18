import { Link, useNavigate } from "react-router-dom"
import useRequest from "../hooks/useRequest"
import { useDispatch, useSelector } from "react-redux"
import { languageSelector } from "../store/language/language.slice"
import { themeSelector } from "../store/theme/theme.slice"
import { languageOptions } from "../data/languageData"
import {useTasksContext} from "../contexts/TasksContextProvider"
import { deleteTask } from "../store/todo/todo.thunks"
import useFetch from "../hooks/useFetch"

const MainPage = () => {

    const {sendRequest} = useRequest({method: "DELETE"})
    const {sendRequest: sendRequestForDone} = useRequest({url: "/api/v1/donetasks", method: "POST"})
    const navigate = useNavigate()
    const {resendRequest} = useFetch({url: "/api/v1/tasks", method: "GET"})
    const {error, loading, response, resendRequestForDone} = useTasksContext()
    const {language} = useSelector(languageSelector)
    const languageObj = languageOptions[language]
    const dispatch = useDispatch()


    const {theme} = useSelector(themeSelector)

    const onDelete= (id) => {
      dispatch(deleteTask(`/api/v1/tasks/${id}`))
      resendRequest()
    }

    const toDoList = response?.items.map(task => {
      return {
        name: task.name,
        id: task._uuid,
        isCompleted: task.isCompleted,
        contributor: task.contributor,
        deadline: task.deadline
      }
    }) || []

    const onDone = (id) => {

      toDoList.forEach(task => {
        if(task.id === id){
          sendRequestForDone([{
            name: task.name, 
            contributor: task.contributor,
            deadline: task.deadline,
            isCompleted: task.isCompleted
          }])
          .then(() => resendRequestForDone())
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
            <div className="task-container" key={todo.id}> 
              <div className="task">
                  <h5>{languageObj.task}</h5>
                  <h5>{languageObj.contributor}</h5>
                  <h5>{languageObj.deadline}</h5>
                  <h3>{todo.name}</h3>
                  <h3>{todo.contributor}</h3>
                  <h3>{todo.deadline}</h3>
                  <Link className="task-btn" to={`/update/${todo.id}`}>{languageObj.edit}</Link>
                  <button className="task-btn" onClick={() => onDone(todo.id)}>{languageObj.done}</button>
                  <button className="task-btn" onClick={() => onDelete(todo.id, "tasks")}>{languageObj.delete}</button>
              </div>
            </div>
            )}
        </div>
    )
}

export default MainPage