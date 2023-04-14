import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home';
import Userrs from './components/Userrs';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/users',
        element:<Userrs></Userrs>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path:'/users/:id',
        element:<Details></Details>,
        loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
