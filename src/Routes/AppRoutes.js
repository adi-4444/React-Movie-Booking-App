import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'

import Login from '../pages/authentication/Login/Login'
import Signup from '../pages/authentication/Signup/Signup'
import LandingPage from '../pages/LandingPage/LandingPage'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import MovieTheater from '../pages/MovieTheater/MovieTheater'
import SelectSeats from '../pages/selectseats/SelectSeats'

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/movie/:id/details' element={<MovieDetails />} />
            <Route path='/buytickets/:movieName/:movieId' element={<MovieTheater />} />
            <Route path='/buytickets/:movieId/:theaterId/selectseats' element={<SelectSeats />} />
         </Routes>
      </Router>
   )
}

export default AppRoutes