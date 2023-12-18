import { languageOptions } from "../data/languageData"
import { useTasksContext } from "../contexts/TasksContextProvider"
import { useSelector } from "react-redux"
import { languageSelector } from "../store/language/language.slice"

const DoneTasks = () => {

    
    const {responseDone, errorDone, loadingDone, onDelete} = useTasksContext()
    const {language} = useSelector(languageSelector)

    const languageObj = languageOptions[language]

    const toDoList = responseDone?.items.map(task => {
        return {
          name: task.name,
          id: task._uuid,
          isCompleted: true,
          contributor: task.contributor,
          deadline: task.deadline
        }
      }) || []

    if(loadingDone) return <p className="loading">Loading...</p>
    if(errorDone) return <p>{errorDone}</p>

    return(
        <div className="done-tasks">
            <h2>{languageObj.completedTasks}</h2>
            <div className="task-list">
                
                {toDoList.map((todo) => 
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
                        <button className="task-btn" onClick={() => onDelete(todo.id, "donetasks")}>{languageObj.delete}</button>   
                    </div>
                </div>
                )}
            </div>    
        </div>
    )
}



export default DoneTasks