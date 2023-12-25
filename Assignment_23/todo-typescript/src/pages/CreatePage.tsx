import React from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import useRequest from "../hooks/useRequest";

interface TaskFormData {
  name: string;
  contributor: string;
  deadline: string;
  isCompleted: boolean;
}

const CreatePage: React.FC = () => {
  const { loading, sendRequest } = useRequest({
    url: '/api/v1/tasks',
    method: "POST"
  });
  const navigate = useNavigate()

  const onFormSubmit = (formData: TaskFormData) => {
    const { name, contributor, deadline, isCompleted } = formData;
    sendRequest([{ name, contributor, deadline, isCompleted }])
      .then(() => navigate('/'))
      .catch(err => console.error(err))
  }

  if (loading) return <p className="loading">Loading...</p>

  return <TaskList onFormSubmit={onFormSubmit} />
}

export default CreatePage;
