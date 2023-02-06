import { AxiosInstance } from "../../utils/AxiosInstance"


export const CreateNewBooking = async (bookingData) => {
   const URL = `/mba/api/v1/bookings`
   try {
      const response = await AxiosInstance.post(URL, bookingData, {
         headers: {
            "x-access-token": localStorage.getItem("token")
         }
      })
      return response
   } catch (error) {
      return error
   }
}