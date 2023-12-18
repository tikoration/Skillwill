import { useNavigate } from "react-router-dom"
import TaskList from "../components/TaskList"
import { postTask } from "../store/todo/todo.thunks"
import { useDispatch, useSelector } from "react-redux"

const CreatePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading, error, todoList} = useSelector((state) => state.todo)
    
    const addTask = (name, contributor, deadline, isCompleted) => {
        dispatch(postTask([{name, contributor, deadline, isCompleted}]))
        .then(() => navigate('/'))
    }

     if(loading && !todoList) return <p className="loading">Loading...</p> 
     if(error && !todoList) return <p className="loading">{error}</p>

    return(
        <TaskList onFormSubmit={addTask}/>
    )
    
}

export default CreatePage