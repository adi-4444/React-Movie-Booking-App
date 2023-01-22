import React, { useState, useEffect } from 'react'
import './MovieTheater.css'
import { useParams } from 'react-router-dom'
import Navbar from '../LandingPage/Navbar/Navbar'
import { getAMovie } from '../../common/apis/Movies'
import { CBadge } from '@coreui/react'
import { getTheaters } from '../../common/apis/Theaters'

const MovieTheater = () => {
   const { movieId } = useParams()
   const [data, setData] = useState([])
   const [availableTheaters, setAvailableTheaters] = useState([])
   console.log(availableTheaters)
   const getDetails = async () => {
      const res = await getAMovie(movieId)
      setData(res.data)
      const theatres = await getTheaters()
      const available = theatres.data.filter(t => t.movies.includes(movieId))
      setAvailableTheaters(available)
   }

   useEffect(() => {
      getDetails()
   }, [])

   return (
      <div>
         <Navbar />
         <div className='movie-detail'>
            <h2>{data.name}</h2>
            <div>
               <CBadge color='danger' shape='rounded-pill m-1'>
                  {data.description}
               </CBadge>
               <CBadge color='dark' shape='rounded-pill m-1'>
                  {data.language}
               </CBadge>
               <CBadge color='dark' shape='rounded-pill m-1'>
                  {data.releaseStatus}
               </CBadge>
            </div>
            <h5 className='m-3'>Director : {data.director}</h5>
            <h5 className='m-3'>Release Date : {data.releaseDate}</h5>

         </div>
      </div>
   )
}

export default MovieTheater