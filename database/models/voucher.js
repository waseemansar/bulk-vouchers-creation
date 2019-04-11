'use strict';
module.exports = (sequelize, DataTypes) => {
    const Voucher = sequelize.define('Voucher', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        code: DataTypes.STRING,
        flatAmount: DataTypes.DECIMAL,
        percentage: DataTypes.INTEGER,
        kdLimit: DataTypes.DECIMAL,
        redemptionCount: DataTypes.INTEGER,
        redemptionLimit: DataTypes.INTEGER,
        customerRedemptionLimit: DataTypes.INTEGER,
        startDate: DataTypes.DATEONLY,
        endDate: DataTypes.DATEONLY,
        isValid: DataTypes.BOOLEAN,
        isValidForThisCustomer: DataTypes.BOOLEAN,
        heroPhoto: DataTypes.STRING,
        description: DataTypes.STRING,
        customerRedemptionsCount: DataTypes.INTEGER,
        validEmailDomains: DataTypes.STRING
    }, {});
    Voucher.associate = function (models) {
        // associations can be defined here
    };
    return Voucher;
};