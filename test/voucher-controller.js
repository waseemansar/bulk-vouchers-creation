const expect = require('chai').expect;

const { createTestVoucherFile } = require('../util');
const voucherController = require('../controllers/voucher');

describe('Voucher Controller', function () {
    it('should return success response', function (done) {
        this.timeout(8000);
        const req = {
            file: {
                path: 'test/vouchers.csv'
            }
        }

        const res = {
            statusCode: 201,
            message: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.message = data.message;
            }
        };

        voucherController.createVoucher(req, res, () => { }).then(() => {
            expect(res.statusCode).to.equal(201);
            expect(res.message).to.equal('File stored and vouchers created');
            done();
        });
    });
});