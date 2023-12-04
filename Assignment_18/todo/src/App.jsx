import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';

const API_KEY = 'eBL-7fHd9gKiIfPE6-4ig94wfolYyVplFcm5UMy-qqc0L4MnSQ'

function App() {
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    fetch('/api/v1/tasks', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Error")
      return res.json()
    })
    .then(data => setToDoList(data.items.map( task => {
        return {
          name: task.name,
          id: task._uuid,
          isCompleted: false
        }
    })))
    .catch(err => console.log(err))
  }, [])

  const onFormSubmit = (name, isCompleted) => {
    fetch('/api/v1/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{name, isCompleted}])
      
    })
    .then(res => {
      if(!res.ok) throw new Error("Error")
      return res.json()
    })
    .then(data => setToDoList((prevState) =>[{
      name: data.items[0].name,
      id: data.items[0]._uuid,
      isCompleted: false
    }, ...prevState]))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <TaskList onFormSubmit={onFormSubmit}/>
        {toDoList.map((todo) => 
          <div>
            <Task task={todo}/>
          </div>
        )}
    </div>
  );
}

export default App;
