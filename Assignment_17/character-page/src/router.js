import LinkLayout from "./layouts/LinkLayout"
import About from "./pages/About"
import MainPage from "./pages/MainPage"
import Facts from "./pages/Facts"
import ErrorPage from "./pages/ErrorPage"

const router = [
    {
        element: <LinkLayout />,
        path: '/',
        children: [{
            element: <MainPage />,
            index: true
        },
        {
            element: <About />,
            path: "/about"
        },
        {
            element: <Facts />,
            path: "/:factId"
        },
        {
            element: <ErrorPage />,
            path: "*"
        }
    ]}
]

export default router