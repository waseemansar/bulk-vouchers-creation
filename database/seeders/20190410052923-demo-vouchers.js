'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Vouchers', [{
            code: 'SWZXCDFTGH',
            flatAmount: 10.25,
            percentage: 2,
            kdLimit: 13.0,
            redemptionCount: 97,
            redemptionLimit: 113,
            customerRedemptionLimit: 50,
            startDate: '2019-04-01 15:00:00',
            endDate: '2019-05-01 15:00:00',
            isValid: true,
            isValidForThisCustomer: true,
            heroPhoto: 'https://i.pinimg.com/originals/57/bb/bd/57bbbdcde92c68b1fe74a4b2a7ab47a8.jpg',
            description: 'Lorem ipsum dolor sit amet',
            customerRedemptionsCount: 10,
            validEmailDomains: '',
            createdAt: '2019-05-01 15:00:00',
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Vouchers', null, {});
    }
};
