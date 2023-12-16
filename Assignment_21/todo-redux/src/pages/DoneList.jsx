import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { deleteTodoAction } from "../store/todo/todo.actions"
import { Link } from "react-router-dom"

const DoneListPage = () => {
    
    const {todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const onDelete = (id) => {
        dispatch(deleteTodoAction(id))
   }

    return <div className="main-component">
        <h2>Completes Tasks</h2>
        {todoList.map(item => 
            item.isDone &&
                <div className="tasks-list" key={item.id}>
                    <h2>{item.task}</h2>
                    <FontAwesomeIcon 
                        onClick={() => onDelete(item.id)}
                        className="trash-icon" 
                        icon={faTrash}
                    />
                </div>    
        )}
        <Link className="links" to="/">Back to To Do List</Link>
    </div>
}

export default DoneListPage