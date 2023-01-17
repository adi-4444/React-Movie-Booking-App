import { AxiosInstance } from "../../utils/AxiosInstance"

export const getMovies = async () => {
   const URL = '/mba/api/v1/movies'
   try {
      const response = await AxiosInstance.get(URL)
      return response
   } catch (error) {
      return error
   }
}
export const getAMovie = async (movie) => {
   const URL = `/mba/api/v1/movies/${movie}`
   try {
      const response = await AxiosInstance.get(URL)
      return response
   } catch (error) {
      return error
   }
}
export const removeMovie = async (movie) => {
   const URL = `/mba/api/v1/movies/${movie._id}`
   try {
      const response = await AxiosInstance.delete(URL, {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      return response
   } catch (error) {
      return error
   }
}