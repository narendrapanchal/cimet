import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';

const routes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
      ]
  }
])
function AllRoutes() {
  return (
    <RouterProvider router={routes}></RouterProvider>
      
  )
}

export default AllRoutes
