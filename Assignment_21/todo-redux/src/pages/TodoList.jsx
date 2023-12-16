import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteTodoAction, doneTodoAction } from "../store/todo/todo.actions"
// import useLocalStorage from "../hooks/useLocalStorage"


const TodoListPage = () => {

    const {todoList} = useSelector((state) => state.todo)   
    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(deleteTodoAction(id))
   }

   const onDone = (id) => {
        dispatch(doneTodoAction(id))
   }

    return <div className="main-component">
        <h2>To Do List</h2>
        
        {todoList.map((item) => 
            !item.isDone &&
            <div className="tasks-list"key={item.id}>
                    <h2>{item.task}</h2>
                    <button onClick={() => onDone(item.id)}>Done</button>
                    <FontAwesomeIcon 
                        onClick={() => onDelete(item.id)}
                        className="trash-icon" 
                        icon={faTrash}
                    />
                </div> 
        )}
        <Link className="links" to="/create">Add Tasks</Link>
        <Link  className="links" to="/donetasks">Completed Tasks</Link>
    </div>
}

export default TodoListPage