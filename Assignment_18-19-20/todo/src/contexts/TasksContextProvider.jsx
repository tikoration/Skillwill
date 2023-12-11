import { createContext, useCallback, useContext, useMemo } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";


const TasksContext = createContext(null)

const TasksContextProvider = ({children}) => {
    const {error, loading, response, resendRequest} = useFetch({url: '/api/v1/tasks', method: 'GET'})
    const {
        error: errorDone, 
        loading: loadingDone, 
        response: responseDone, 
        resendRequest: resendRequestForDone} = useFetch({url: '/api/v1/donetasks', method: 'GET'})
    const {sendRequest} = useRequest({method: "DELETE"})

    const onDelete = useCallback((taskId, taskVersion) => {
        sendRequest(null, `/api/v1/${taskVersion}/${taskId}`)
        .then(() => 
        taskVersion === "tasks" ? 
        resendRequest() :
        resendRequestForDone()
        )
        .catch((error) => console.error("Error deleting done task:", error))
    }, [sendRequest])

    const contextValue = useMemo(() => 
    ({error, loading, response, onDelete, errorDone, loadingDone, responseDone, resendRequestForDone
    }), [error, loading, response, onDelete, errorDone, loadingDone, responseDone, resendRequestForDone])
   
   return <TasksContext.Provider value={contextValue}>
        {children}
    </TasksContext.Provider>
}

export const useTasksContext = () => {
    const contextValue = useContext(TasksContext)
    if(!contextValue) throw new Error("Your component is not inside TasksContextProvider")
    
    return contextValue
}

export default TasksContextProvider