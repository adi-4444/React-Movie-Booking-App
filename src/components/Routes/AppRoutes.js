import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/authentication/Login/Login'
import Signup from '../../pages/authentication/Signup/Signup'

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
         </Routes>
      </Router>
   )
}

export default AppRoutes