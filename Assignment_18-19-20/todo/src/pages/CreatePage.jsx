import { useNavigate } from "react-router-dom"
import TaskList from "../components/TaskList"
import useRequest from "../hooks/useRequest"

const CreatePage = () => {

    const {loading, sendRequest} = useRequest({url: '/api/v1/tasks', method: "POST"})
    const navigate = useNavigate()

    const onFormSubmit = (name, contributor, deadline, isCompleted) => {
        sendRequest([{name, contributor, deadline, isCompleted}])
        .then(() => navigate('/'))
        .catch(err => console.log(err))
      }

     if(loading) return <p className="loading">Loading...</p> 
     
    return(
        <TaskList onFormSubmit={onFormSubmit}/>
    )
    
}

export default CreatePage