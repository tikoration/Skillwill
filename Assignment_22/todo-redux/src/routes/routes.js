import MainPage from "../pages/MainPage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import DoneTasks from "../pages/DoneTasks";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const routes = [{
    element: (
        <div>
                <Header />
                <Outlet />
        </div>
    ),
    path: '/',
    children: [
        {
            element:  <MainPage />,
            index: true
        },
        {
            element: <CreatePage />,
            path: '/create'
        },
        {
            element: <UpdatePage />,
            path: '/update/:taskId'
        },
        {
            element: <DoneTasks />,
            path: '/donetasks'
        }
    ]
}]

export default routes