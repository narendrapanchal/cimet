import React from 'react';
import List from '../pages/List';
import Edit from '../pages/Edit';
import Create from '../pages/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function AllRoutes() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={List} path="/"/>
    <Route element={Edit} path="/edit/:id"/>
    <Route element={List} path="/create"/>
   </Routes>
   </BrowserRouter>
  )
}

export default AllRoutes
