import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RouteObject } from 'react-router-dom';

import routes from './routes/routes'

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes as RouteObject[])} />
  )
}

export default App;
