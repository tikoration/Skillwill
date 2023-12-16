import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"
import { Link, useNavigate } from "react-router-dom" 
import {nanoid} from "nanoid"

const CreateTodoPage = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodoAction({
            task: value,
            isDone: false,
            id: nanoid()
        }))
        setValue("")
        navigate('/')
    }

    return <form onSubmit={onSubmit}>
        <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)}
        />
        <button>Add Task</button>

    </form>
}

export default CreateTodoPage