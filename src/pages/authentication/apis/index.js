import { AxiosInstance } from "../../../common/utils/AxiosInstance";

export const signIn = async (user) => {
   const URL = '/mba/api/v1/auth/signin'
   try {
      const response = await AxiosInstance.post(URL, user)
      return response
   } catch (error) {
      return error.message
   }
}
export const signUp = async (user) => {
   const URL = '/mba/api/v1/auth/signup'
   try {
      const response = await AxiosInstance.post(URL, user)
      return response
   } catch (error) {
      return error.message
   }
}