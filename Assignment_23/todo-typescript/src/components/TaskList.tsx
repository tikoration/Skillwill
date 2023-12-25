import React, { useRef } from "react";
import { languageOptions, useLanguageContext } from "../contexts/LanguageContext";

export interface TaskFormData {
  name: string;
  contributor: string;
  deadline: string;
  isCompleted: boolean;
}

interface TaskListProps {
  onFormSubmit: (formData: TaskFormData) => void;
  name?: string;
  contributor?: string;
  deadline?: string;
  isCompleted?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ onFormSubmit, name, contributor, deadline, isCompleted }) => {
  const taskRef = useRef<HTMLInputElement>(null)
  const deadlineRef = useRef<HTMLInputElement>(null)
  const contributorRef = useRef<HTMLInputElement>(null)
  const { language } = useLanguageContext()
  const languageObj = languageOptions[language]

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskRef.current && contributorRef.current && deadlineRef.current) {
      onFormSubmit({
        name: taskRef.current.value,
        contributor: contributorRef.current.value,
        deadline: deadlineRef.current.value,
        isCompleted: false,
      })
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={languageObj.task}
          id="form-input"
          ref={taskRef}
          defaultValue={name}
        />
        <input
          type="text"
          placeholder={languageObj.contributor}
          ref={contributorRef}
          defaultValue={contributor}
        />
        <input
          type="text"
          placeholder={languageObj.deadline}
          ref={deadlineRef}
          defaultValue={deadline}
        />
        <button className="task-btn" type="submit">
          {languageObj.addTask}
        </button>
      </form>
    </>
  )
}

export default TaskList
