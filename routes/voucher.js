const express = require('express');

const voucherController = require('../controllers/voucher')

const router = express.Router()

router.post('/upload', voucherController.createVoucher)

module.exports = router