const calculatTotalCost = (data) => {
    let totalCost = data.cost * data.nights + (data.cost * data.nights) * 0.03 + 100 + data.cost * data.nights * 0.1 
    return totalCost;
  }

module.exports = calculatTotalCost;