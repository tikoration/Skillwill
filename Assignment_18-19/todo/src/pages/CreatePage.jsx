import { useNavigate } from "react-router-dom"
import TaskList from "../components/TaskList"
import useRequest from "../hooks/useRequest"

const CreatePage = () => {

    const {loading, sendRequest} = useRequest({url: '/api/v1/tasks', method: "POST"})
    const navigate = useNavigate()

    const onFormSubmit = (name, isCompleted) => {
        sendRequest([{name, isCompleted}])
        .then(() => navigate('/'))
        .catch(err => console.log(err))
      }

     if(loading) return <p>Loading...</p> 
    return(
        <TaskList onFormSubmit={onFormSubmit}/>
    )
    
}

export default CreatePage