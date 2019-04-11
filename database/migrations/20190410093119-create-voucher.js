'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Vouchers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            flatAmount: {
                type: Sequelize.DECIMAL
            },
            percentage: {
                type: Sequelize.INTEGER
            },
            kdLimit: {
                type: Sequelize.DECIMAL
            },
            redemptionCount: {
                type: Sequelize.INTEGER
            },
            redemptionLimit: {
                type: Sequelize.INTEGER
            },
            customerRedemptionLimit: {
                type: Sequelize.INTEGER
            },
            startDate: {
                type: Sequelize.DATEONLY
            },
            endDate: {
                type: Sequelize.DATEONLY
            },
            isValid: {
                type: Sequelize.BOOLEAN
            },
            isValidForThisCustomer: {
                type: Sequelize.BOOLEAN
            },
            heroPhoto: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            customerRedemptionsCount: {
                type: Sequelize.INTEGER
            },
            validEmailDomains: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATEONLY,
                defaultValue: Sequelize.NOW
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Vouchers');
    }
};