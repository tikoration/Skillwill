import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { languageSelector } from "../store/language/language.slice"
import { themeSelector } from "../store/theme/theme.slice"
import { languageOptions } from "../data/languageData"
import { deleteTask, getTasks, putTask } from "../store/todo/todo.thunks"
import { useEffect } from "react"

const MainPage = () => {

    const navigate = useNavigate()
    const {language} = useSelector(languageSelector)
    const languageObj = languageOptions[language]
    const dispatch = useDispatch()
    const {loading, error, todoList} = useSelector(state => state.todo)
    const {theme} = useSelector(themeSelector)
    const darkTheme = theme === "dark" ? {backgroundColor: "#5C4033", color: "white"} :{}

    const onDelete= (id) => {
      dispatch(deleteTask(`/api/v1/tasks/${id}`))
      .then(() => dispatch(getTasks()))
      .catch((error) => console.log(error))
    }

    useEffect(() => {
      dispatch(getTasks())
    }, [])

    const toDoList = (todoList || []).filter(task => !task.isCompleted)
      .map(({ name, _uuid: id, isCompleted, contributor, deadline }) => ({
        name,
        id,
        isCompleted,
        contributor,
        deadline
      }))

    const onDone = (id) => {
      toDoList.forEach(task => {
        if(task.id === id){
          dispatch(putTask({
            name: task.name,
            contributor: task.contributor,
            deadline: task.deadline,
            isCompleted: true,
            url: `/api/v1/tasks/${id}`
          }))
          .then(() => navigate('/donetasks'))
        }
      })
    }

    if(loading && !todoList) return <p className="loading">Loading...</p>
    if(error && !todoList) return <p>{error}</p>

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
                  <Link style={darkTheme} className="task-btn" to={`/update/${todo.id}`}>{languageObj.edit}</Link>
                  <button style={darkTheme} className="task-btn" onClick={() => onDone(todo.id)}>{languageObj.done}</button>
                  <button style={darkTheme} className="task-btn" onClick={() => onDelete(todo.id)}>{languageObj.delete}</button>
              </div>
            </div>
            )}
        </div>
    )
}

export default MainPage