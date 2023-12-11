import { useNavigate, useParams } from "react-router-dom"
import TaskList from "../components/TaskList"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"


const UpdatePage = () => {
    const {taskId} = useParams()
    const {response: responseMain, error, loading} = useFetch({url: `/api/v1/tasks/${taskId}`, method: "GET"})
    const {response: responseDone} = useFetch({url: `/api/v1/donetasks/${taskId}`, method: "GET"})
    const navigate = useNavigate()

    const response = responseMain || responseDone

   
    const {sendRequest} = useRequest({url: `/api/v1/tasks/${taskId}`, method: "PUT"})
    const onSubmit = (name, contributor, deadline, isCompleted) => {
         sendRequest({name, contributor, deadline, isCompleted})
         .then(() => navigate('/'))
         .catch(err => console.log(err))
    }

    if(loading && !response) return <p className="loading">Loading . . . </p>
    if(error || !response) return <p className="loading">Something went wrong</p>

    return(
        <TaskList 
            onFormSubmit={onSubmit}
            name={response.name}
            isCompleted={response.isCompleted}
            contributor = {response.contributor}
            deadline={response.deadline}
        />
    )
}

export default UpdatePage