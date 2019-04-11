const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const voucherRoutes = require('./routes/voucher')

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/vouchers');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/csv') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'))

app.use('/api', voucherRoutes)

app.use('/', (req, res, next) => {
    res.send('Bulk Vouchers Creation App')
})

app.listen(8000, () => {
    console.log('Server running on port 8000');
});