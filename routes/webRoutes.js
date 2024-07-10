const express = require('express');
const router = express.Router();
const webController = require('../controllers/webControllers');
const upload = require('../config/multerConfig'); 




router.use(express.static('styles'));

router.get('/', webController.home_page);

router.get('/cart', webController.cart);

router.get('/details', webController.details);

router.get('/auctioned-items', webController.auctioned_items);

router.post('/post', upload, webController.post_item);
// upload.single('itemImage'),

router.get('/post', webController.get_post_page);


module.exports = router;