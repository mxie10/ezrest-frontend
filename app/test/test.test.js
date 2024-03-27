/**
 * calculate rent cost
 * the total cost is calculated by cost * data.nights + (cost * nights) * 0.03 + 100 + cost * nights * 0.1 
 * @author Mingyuan Xie
 **/

const calculatTotalCost = require('./calculateTotalCost');

describe('calculat Total Cost', () => {
    test('calculates total cost correctly', () => {

        const testData = {
            _id: { "$oid": "65dd20ca73b370c075e7f464" },
            status: 'Reservation Confirmed',
            confirmationCode: "HMAMNBWYF5",
            description: "House",
            imageSrc: 'https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=720',
            createdAt: { "$date": { "$numberLong": "1689606868828" } },
            userId: { "$oid": "65d79834c2f97225f93c136b" },
            cost: 360,
            nights: 2,
            startDate: 'Sep 24, 2024',
            endDate: 'Oct 30, 2024'
          }

        const totalCost = calculatTotalCost(testData);

        expect(totalCost).toBe(902.8); 
    });
});