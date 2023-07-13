import React from 'react'
import Users from './components/UsersTable'
import {Route, BrowserRouter as Router,Routes } from "react-router-dom";
import AddUser from './components/AddUser';
import { UpdateUser } from './components/UpdareUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/updateUser' element={<UpdateUser />} />
      </Routes>
    </Router>
  )
}

export default App