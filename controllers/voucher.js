const xlsx = require("xlsx");
const moment = require('moment');

const Voucher = require('../database/models').Voucher;

exports.createVoucher = async (req, res, next) => {
    if (!req.file) {
        return res.status(200).json({ message: 'No file provided' });
    }

    const workbook = xlsx.readFile(req.file.path);
    const sheet_name = workbook.SheetNames[0];
    const vouchers = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name], {
        defval: ""
    });

    try {
        const errors = [];
        await Promise.all(vouchers.map(async (voucher, index) => {
            if (voucher.code === '') {
                errors.push(`Voucher ${index + 1} code cannot be empty`);
            } else if (voucher.percentage === '') {
                errors.push(`Voucher ${index + 1} percentage cannot be empty`);
            } else if (voucher.isValid === '') {
                errors.push(`Voucher ${index + 1} isValid cannot be empty`);
            }

            if (errors.length <= 0) {
                await Voucher.create({
                    code: voucher.code,
                    flatAmount: voucher.flatAmount,
                    percentage: voucher.percentage,
                    kdLimit: voucher.kdLimit,
                    redemptionCount: voucher.redemptionCount,
                    redemptionLimit: voucher.redemptionLimit,
                    customerRedemptionLimit: voucher.customerRedemptionLimit,
                    startDate: moment(new Date((voucher.startDate - (25567 + 2)) * 86400 * 1000)).format('YYYY-MM-DD'),
                    endDate: moment(new Date((voucher.endDate - (25567 + 2)) * 86400 * 1000)).format('YYYY-MM-DD'),
                    isValid: voucher.isValid,
                    isValidForThisCustomer: voucher.isValidForThisCustomer,
                    heroPhoto: voucher.heroPhoto,
                    description: voucher.description,
                    customerRedemptionsCount: voucher.customerRedemptionLimit,
                    validEmailDomains: voucher.validEmailDomains
                });
            }
        }));

        if (errors.length > 0)
            return res.status(422).json({ message: errors });

        return res.status(201).json({ message: 'File stored and vouchers created' });
    } catch (err) {
        res.status(500).json({ message: 'Error' });
        next(err)
    }
}