import { createContext, useCallback, useContext, useMemo, ReactNode, FC } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";

export interface Task {
  name: string;
  _uuid: string;
  isCompleted: boolean;
  contributor: string;
  deadline: string;
}

interface TasksContextValue {
  error: any;
  loading: boolean;
  response: { items: Task[] } | null;
  errorDone: any;
  loadingDone: boolean;
  responseDone: { items: Task[] } | null;
  onDelete: (taskId: string, taskVersion: string) => void;
  resendRequestForDone: () => void;
}

const TasksContext = createContext<TasksContextValue | null>(null);

interface TasksContextProviderProps {
  children: ReactNode;
}

const TasksContextProvider: FC<TasksContextProviderProps> = ({ children }) => {
  const { error, loading, response, resendRequest } = useFetch({ url: '/api/v1/tasks', method: 'GET' });
  const {
    error: errorDone,
    loading: loadingDone,
    response: responseDone,
    resendRequest: resendRequestForDone
  } = useFetch({ url: '/api/v1/donetasks', method: 'GET' });
  const { sendRequest } = useRequest({ method: "DELETE" });
  console.log(response)
  const onDelete = useCallback((taskId: string, taskVersion: string) => {
    sendRequest(null, `/api/v1/${taskVersion}/${taskId}`)
      .then(() =>
        taskVersion === "tasks"
          ? resendRequest()
          : resendRequestForDone()
      )
      .catch((error) => console.error("Error deleting done task:", error));
  }, [sendRequest, resendRequest, resendRequestForDone]);
  
  const contextValue: TasksContextValue = useMemo(() => ({
    error,
    loading,
    response,
    onDelete,
    errorDone,
    loadingDone,
    responseDone,
    resendRequestForDone
  }), [error, loading, response, onDelete, errorDone, loadingDone, responseDone, resendRequestForDone])

  return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>
}

export const useTasksContext = (): TasksContextValue => {
  const contextValue = useContext(TasksContext)
  if (!contextValue) throw new Error("Your component is not inside TasksContextProvider")

  return contextValue;
}

export default TasksContextProvider;
