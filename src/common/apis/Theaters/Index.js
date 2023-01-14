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