import React from "react";
import { languageOptions, useLanguageContext } from "../contexts/LanguageContext";
import { useTasksContext, Task } from "../contexts/TasksContextProvider";

const DoneTasks: React.FC = () => {
  const { language } = useLanguageContext();
  const languageObj = languageOptions[language];
  const { responseDone, errorDone, loadingDone, onDelete } = useTasksContext();

  const toDoList: Task[] = responseDone?.items.map(task => ({
    name: task.name,
    _uuid: task._uuid,
    isCompleted: true,
    contributor: task.contributor,
    deadline: task.deadline
  })) || [];

  if (loadingDone) return <p className="loading">Loading...</p>;
  if (errorDone) return <p>{errorDone}</p>;

  return (
    <div className="done-tasks">
      <h2>{languageObj.completedTasks}</h2>
      <div className="task-list">
        {toDoList.map(todo => (
          <div className="task-container" key={todo._uuid}>
            <div className="task">
              <h5>{languageObj.task}</h5>
              <h5>{languageObj.contributor}</h5>
              <h5>{languageObj.deadline}</h5>
              <h3>{todo.name}</h3>
              <h3>{todo.contributor}</h3>
              <h3>{todo.deadline}</h3>
            </div>
            <div className="done-task-btns">
              <button className="task-btn" onClick={() => onDelete(todo._uuid, "donetasks")}>
                {languageObj.delete}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoneTasks;
