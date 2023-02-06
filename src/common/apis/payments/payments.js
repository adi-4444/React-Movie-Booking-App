import { AxiosInstance } from "../../utils/AxiosInstance"


export const makePayment = async (PaymentData) => {
   const URL = `/mba/api/v1/payments`
   try {
      const response = await AxiosInstance.post(URL, PaymentData, {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      return response
   } catch (error) {
      return error
   }
}