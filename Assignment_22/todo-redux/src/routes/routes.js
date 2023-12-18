import MainPage from "../pages/MainPage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import DoneTasks from "../pages/DoneTasks";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LanguageContextProvider from "../contexts/LanguageContext";
import TasksContextProvider from "../contexts/TasksContextProvider";

const routes = [{
    element: (
        <div>
            <LanguageContextProvider>
                <Header />
                <Outlet />
            </LanguageContextProvider>
        </div>
    ),
    path: '/',
    children: [
        {
            element: (
                <div>
                    <TasksContextProvider>
                        <MainPage />
                    </TasksContextProvider>
                </div>
            ),
            index: true
        },
        {
            element: <CreatePage />,
            path: '/create'
        },
        {
            element: <TasksContextProvider>
            <UpdatePage />
        </TasksContextProvider>,
            path: '/update/:taskId'
        },
        {
            element: (
                <div>
                    <TasksContextProvider>
                        <DoneTasks />
                    </TasksContextProvider>
                </div>
            ),
            path: '/donetasks'
        }
    ]
}]

export default routes