import { AxiosInstance } from "../../utils/AxiosInstance"

export const getTheaters = async () => {
   const URL = '/mba/api/v1/theatres'
   try {
      const response = await AxiosInstance.get(URL)
      return response
   } catch (error) {
      return error
   }
}

export const removeTheater = async (theatres) => {
   const URL = `/mba/api/v1/theatres/${theatres._id}`
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