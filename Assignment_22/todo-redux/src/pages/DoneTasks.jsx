import { languageOptions } from "../data/languageData"
import { useDispatch, useSelector } from "react-redux"
import { languageSelector } from "../store/language/language.slice"
import { deleteTask, getTasks } from "../store/todo/todo.thunks"
import { useEffect } from "react"
import { themeSelector } from "../store/theme/theme.slice"

const DoneTasks = () => {

    const {language} = useSelector(languageSelector)
    const {theme} = useSelector(themeSelector)
    const {loading, error, todoList } = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const languageObj = languageOptions[language]
    const darkTheme = theme === "dark" ? {backgroundColor: "#5C4033", color: "white"} :{}

    useEffect(() => {
        dispatch(getTasks())
      }, [])

      const doneList = (todoList || []).filter(task => task.isCompleted)
        .map(({ name, _uuid: id, isCompleted, contributor, deadline }) => ({
            name,
            id,
            isCompleted,
            contributor,
            deadline
        }))

      const onDelete = (id) => {
        dispatch(deleteTask(`/api/v1/tasks/${id}`))
        .then(() => dispatch(getTasks()))
        .catch((error) => console.log(error))
      }
    
    if(loading && !todoList) return <p className="loading">Loading...</p>
    if(error && !todoList) return <p>{error}</p>

    return(
        <div className="done-tasks">
            <h2>{languageObj.completedTasks}</h2>
            <div className="task-list">
                {doneList?.map((todo) => 
                <div className="task-container" key={todo.id}>
                    <div className="task">
                        <h5>{languageObj.task}</h5>
                        <h5>{languageObj.contributor}</h5>
                        <h5>{languageObj.deadline}</h5>
                        <h3>{todo.name}</h3>
                        <h3>{todo.contributor}</h3>
                        <h3>{todo.deadline}</h3>
                    </div>
                    <div className="done-task-btns">
                        <button style={darkTheme} className="task-btn" onClick={() => onDelete(todo.id, "donetasks")}>{languageObj.delete}</button>   
                    </div>
                </div>
                )}
            </div>    
        </div>
    )
}



export default DoneTasks