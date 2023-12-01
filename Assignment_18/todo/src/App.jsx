import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

const API_KEY = 'eBL-7fHd9gKiIfPE6-4ig94wfolYyVplFcm5UMy-qqc0L4MnSQ'

function App() {
  const [toDoList, setToDoList] = useState([])

  const onFormSubmit = (task) => {
    fetch('/api/v1/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{task}])
    })
    .then(res => {
      if(!res.ok) throw new Error("Error")
      return res.json()
    })
    .then(data => setToDoList((prevState) =>[...prevState, data.items.map(todo => 
      ({
      task: todo.task,
      id: todo._uuid
    }))]))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <TaskList onFormSubmit={onFormSubmit}/>

      {toDoList.map((todo) => 
        <div key={todo.id}>
          <h3>{todo.task}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
