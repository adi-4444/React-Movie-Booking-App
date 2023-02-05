import { SEAT_ROWS, SEAT_COLS, SEATS_OCCUPIED } from '../constants/seatData'

export const getSeatNumber = (rowIndex, colIndex) => {
   return ((rowIndex * SEAT_ROWS) + (colIndex + 1))
}

export const seats2dRepresentation = (selectedSeats = []) => {
   const seats = []

   for (let row = 0; row < SEAT_ROWS; row++) {
      const rowArr = []

      for (let col = 0; col < SEAT_COLS; col++) {
         const seat = getSeatNumber(row, col)
         if (SEATS_OCCUPIED.includes(seat)) {
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