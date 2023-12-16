import { createBrowserRouter } from "react-router-dom"
import TodoListPage from "../pages/TodoList"
import CreateTodoPage from "../pages/CreateTodo"
import DoneListPage from "../pages/DoneList"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <TodoListPage />
    },
    {
        path: "/create",
        element: <CreateTodoPage />
    },
    {
        path: "/donetasks",
        element: <DoneListPage />
    }
])

export default routes