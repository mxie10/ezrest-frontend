export function findFirstAvailableDate(occupiedDates, reservation) {
    const today = new Date(); 
    let currentDate = new Date(today); 
    let occupiedDatesArray  = [];
    if(occupiedDates != null && occupiedDates.length != 0){
        occupiedDatesArray = occupiedDates.map(dateString => new Date(dateString));
    }
    const checkinDate = new Date(reservation.checkinDate);
    const checkoutDate = new Date(reservation.checkoutDate);
    const reservationDatesArray = getDatesBetweenDates(checkinDate, checkoutDate);
    occupiedDatesArray.push(...reservationDatesArray);
  
    while (true) {
      const isOccupied = occupiedDatesArray.some(date => datesAreEqual(date, currentDate));
  
      if (!isOccupied) {
        return currentDate;
      }
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  function datesAreEqual(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }
  
  function getDatesBetweenDates(startDate, endDate) {
    const datesArray = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return datesArray;
  }