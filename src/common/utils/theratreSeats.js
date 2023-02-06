import { SEAT_ROWS, SEAT_COLS } from '../constants/seatData'

export const getSeatNumber = (rowIndex, colIndex) => {
   return ((rowIndex * SEAT_ROWS) + (colIndex + 1))
}

export const seats2dRepresentation = (selectedSeats = [], occupiedSeats = []) => {
   const seats = []

   for (let row = 0; row < SEAT_ROWS; row++) {
      const rowArr = []

      for (let col = 0; col < SEAT_COLS; col++) {
         const seat = getSeatNumber(row, col)
         if (occupiedSeats.includes(seat)) {
            rowArr.push("occupied")
         } else if (selectedSeats.includes(seat)) {
            rowArr.push("selected")
         } else {
            rowArr.push("available")
         }
      }
      seats.push(rowArr)
   }

   return seats
}