import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import TaskList, { TaskFormData } from "../components/TaskList"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const UpdatePage: React.FC = () => {
  const { taskId } = useParams()
  const { response, error, loading } = useFetch({ url: `/api/v1/tasks/${taskId}`, method: "GET" })
  const navigate = useNavigate()

  const { sendRequest } = useRequest({ url: `/api/v1/tasks/${taskId}`, method: "PUT" })

  const onSubmit = (formData: TaskFormData) => {
    sendRequest(formData)
      .then(() => navigate('/'))
      .catch(err => console.error(err))
  }

  if (loading && !response) return <p className="loading">Loading . . . </p>
  if (error || !response) return <p className="loading">Something went wrong</p>

  return (
    <TaskList
      onFormSubmit={onSubmit}
      name={response.name}
      isCompleted={response.isCompleted}
      contributor={response.contributor}
      deadline={response.deadline}
    />
  )
}

export default UpdatePage
