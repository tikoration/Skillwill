import React from "react"
import { Link, useNavigate } from "react-router-dom"
import useRequest from "../hooks/useRequest"
import { languageOptions, useLanguageContext } from "../contexts/LanguageContext"
import { useTasksContext, Task } from "../contexts/TasksContextProvider"

const MainPage: React.FC = () => {
  const { sendRequest } = useRequest({ method: "DELETE" })
  const { sendRequest: sendRequestForDone } = useRequest({ url: "/api/v1/donetasks", method: "POST" })
  const navigate = useNavigate()
  const { language } = useLanguageContext()
  const languageObj = languageOptions[language]
  const { error, loading, response, onDelete, resendRequestForDone } = useTasksContext()

  const toDoList: Task[] = response?.items.map(task => ({
    name: task.name,
    _uuid: task._uuid,
    isCompleted: task.isCompleted,
    contributor: task.contributor,
    deadline: task.deadline
  })) || []
  console.log(response)
  const onDone = (id: string) => {
    toDoList.forEach(task => {
      if (task._uuid === id) {
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

  if (loading && !response) return <p className="loading">Loading...</p>
  if (error && !response) return <p>{error}</p>

  return (
    <div className="App">
      {toDoList.map(todo => (
        <div className="task-container" key={todo._uuid}>
          <div className="task">
            <h5>{languageObj.task}</h5>
            <h5>{languageObj.contributor}</h5>
            <h5>{languageObj.deadline}</h5>
            <h3>{todo.name}</h3>
            <h3>{todo.contributor}</h3>
            <h3>{todo.deadline}</h3>
            <Link className="task-btn" to={`/update/${todo._uuid}`}>{languageObj.edit}</Link>
            <button className="task-btn" onClick={() => onDone(todo._uuid)}>{languageObj.done}</button>
            <button className="task-btn" onClick={() => onDelete(todo._uuid, "tasks")}>{languageObj.delete}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainPage
