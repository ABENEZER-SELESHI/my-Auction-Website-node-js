const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auctionSchema = new Schema({

    userName: {
        type: String, 
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    itemImage: {
        type: String,
        required: true,
    },
    startingPrice: {
        type: Number,
        required: false,
    },
    currentPrice: {
        type: Number,
        required: false,
    },
    currentBidders: {
        type: Number,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;