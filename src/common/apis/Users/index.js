import { AxiosInstance } from "../../utils/AxiosInstance"

export const getUsers = async () => {
   const URL = '/mba/api/v1/users'
   try {
      const response = await AxiosInstance.get(URL, {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      return response
   } catch (error) {
      return error
   }
}