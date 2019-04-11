const fs = require('fs');
const os = require('os');
const path = require('path');

const casual = require('casual');
const { times } = require('lodash');
const moment = require('moment');

module.exports.createTestVoucherFile = () => {
    const vouchers = [
        {
            code: 'code',
            flatAmount: 'flatAmount',
            percentage: 'percentage',
            kdLimit: 'kdLimit',
            redemptionCount: 'redemptionCount',
            redemptionLimit: 'redemptionLimit',
            customerRedemptionLimit: 'customerRedemptionLimit',
            startDate: 'startDate',
            endDate: 'endDate',
            isValid: 'isValid',
            isValidForThisCustomer: 'isValidForThisCustomer',
            heroPhoto: 'heroPhoto',
            description: 'description',
            customerRedemptionsCount: 'customerRedemptionLimit',
            validEmailDomains: 'validEmailDomains'
        }
    ];
    times(10000, ix => {
        const startDate = moment().format('YYYY-MM-DD');
        const endDate = moment(startDate).add(1, 'M').format('YYYY-MM-DD');
        const kdLimit = casual.integer(0, 50);
        const redemptionLimit = casual.integer(0, 120);
        const redemptionCount = casual.integer(0, redemptionLimit);

        vouchers.push({
            code: casual.color_name.toUpperCase(),
            flatAmount: casual.double(1, 100).toFixed(2),
            percentage: casual.integer(1, 6),
            kdLimit: casual.double(1, 10).toFixed(2),
            redemptionCount: casual.integer(1, 100),
            redemptionLimit: casual.integer(1, 150),
            customerRedemptionLimit: casual.integer(1, 50),
            startDate: startDate,
            endDate: endDate,
            isValid: casual.boolean,
            isValidForThisCustomer: casual.boolean,
            heroPhoto: 'https://i.pinimg.com/originals/57/bb/bd/57bbbdcde92c68b1fe74a4b2a7ab47a8.jpg',
            description: casual.sentence,
            customerRedemptionsCount: 1,
            validEmailDomains: ''
        });
    });

    const filename = path.join(__dirname, 'test/vouchers.csv');
    const output = [];

    vouchers.forEach((d) => {
        const row = [];
        row.push(d.code);
        row.push(d.flatAmount);
        row.push(d.percentage);
        row.push(d.kdLimit);
        row.push(d.redemptionCount);
        row.push(d.redemptionLimit);
        row.push(d.customerRedemptionLimit);
        row.push(d.startDate);
        row.push(d.endDate);
        row.push(d.isValid);
        row.push(d.isValidForThisCustomer);
        row.push(d.heroPhoto);
        row.push(d.description);
        row.push(d.customerRedemptionsCount);
        row.push(d.validEmailDomains);

        output.push(row.join());
    });

    fs.writeFileSync(filename, output.join(os.EOL));
}