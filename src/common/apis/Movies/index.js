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