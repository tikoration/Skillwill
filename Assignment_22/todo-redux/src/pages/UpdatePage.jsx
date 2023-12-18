import { useNavigate, useParams } from "react-router-dom"
import TaskList from "../components/TaskList"
import { putTask, getOneTask } from "../store/todo/todo.thunks"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const UpdatePage = () => {
    const {taskId} = useParams()
    const navigate = useNavigate()
    const {chosenTask, loading, error, todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()
   
    useEffect(() => {
       dispatch(getOneTask(`/api/v1/tasks/${taskId}`))
       console.log(chosenTask)
    }, [dispatch, taskId])

    const update = (name, contributor, deadline, isCompleted) => {
        dispatch(putTask({
            name, contributor, deadline, isCompleted,
            url: `/api/v1/tasks/${chosenTask._uuid}`
        }))
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }

    if(loading && !todoList) return <p className="loading">Loading . . . </p>
    if(error || !todoList) return <p className="loading">Something went wrong</p>

    return(
        <TaskList 
            onFormSubmit={update}
            name={chosenTask.name}
            isCompleted={chosenTask.isCompleted}
            contributor = {chosenTask.contributor}
            deadline={chosenTask.deadline}
        />
    )
}

export default UpdatePage