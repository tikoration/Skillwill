import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import LanguageContextProvider from "../contexts/LanguageContext"
import TasksContextProvider from "../contexts/TasksContextProvider"
import MainPage from "../pages/MainPage"
import CreatePage from "../pages/CreatePage"
import UpdatePage from "../pages/UpdatePage"
import DoneTasks from "../pages/DoneTasks"
import Header from "../components/Header"

interface ModifiedRouteObject {
  element: ReactNode
  path?: string
  children?: ModifiedRouteObject[]
  index?: boolean
}

const routes: ModifiedRouteObject[] = [
  {
    element: (
        <LanguageContextProvider>
          <Header />
          <Outlet />
        </LanguageContextProvider>
    ),
    path: "/",
    children: [
      {
        element: (
            <TasksContextProvider>
              <MainPage />
            </TasksContextProvider>
        ),
        index: true,
      },
      {
        element: <CreatePage />,
        path: "/create",
      },
      {
        element: (
          <TasksContextProvider>
            <UpdatePage />
          </TasksContextProvider>
        ),
        path: "/update/:taskId",
      },
      {
        element: (
            <TasksContextProvider>
              <DoneTasks />
            </TasksContextProvider>
        ),
        path: "/donetasks",
      },
    ],
  },
]

export default routes
