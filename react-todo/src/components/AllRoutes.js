import React from 'react';
import List from '../pages/List';
import Edit from '../pages/Edit';
import Create from '../pages/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
function AllRoutes() {
  const routes =[
    {path: '', ChildComponent:List,isPrivate:false,role:["admin"]},
    {path: '/edit/:id', ChildComponent:Edit},
    {path: '/create', ChildComponent:Create},
  ]
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    {routes.map(({path,ChildComponent})=><Route element={<ChildComponent/>} path={path}></Route>)}
   </Routes>
   </BrowserRouter>
  )
}

export default AllRoutes
