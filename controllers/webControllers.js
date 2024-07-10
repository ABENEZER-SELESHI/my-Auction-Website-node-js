const Auction = require('../models/auctions');
const path = require('path');




const home_page = async (req, res) => {
    try {
        const auctions = await Auction.find(); // Fetch all auctions
        res.render('home', { auctions, title: 'home page' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

const details = (req, res) => {
    res.render('details', { title: 'Auction item info' })
}

const cart = (req, res) => {
    res.render('cart', { title: 'Won items' })
}

const auctioned_items = (req, res) => {
    res.render('auctioned_items', { title: 'auctioned items' })
}

// 
// 
// Handle POST request to upload auction item
const post_item = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const auction = new Auction({
        userName: req.body.userName,
        itemName: req.body.itemName,
        itemImage: req.file.path, // Save the file path
        startingPrice: req.body.startingPrice,
        currentPrice: req.body.startingPrice,
        currentBidders: 0,
        category: req.body.category,
    });

    console.log(auction);

    auction.save()
        .then(result => {
        res.status(201).json(result);
            // res.send(result);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};




// 
// 
// display post page
const get_post_page = (req, res) => {
    res.render('post', { title: 'post the items you want to auctioned_items.' })
}


module.exports = {
    home_page,
    details,
    cart,
    auctioned_items,
    post_item,
    get_post_page,
}