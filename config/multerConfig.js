const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Configure Multer
const upload = multer({
    storage: storage,
fileFilter: function (req, file, cb) {
    // File type validation if needed
    cb(null, true);
  }
}).single('itemImage');
// .fields([
//   { name: 'userName' },
//   { name: 'itemName' },
//   { name: 'itemImage' },
//   { name: 'startingPrice' }
// ]);

module.exports = upload;
