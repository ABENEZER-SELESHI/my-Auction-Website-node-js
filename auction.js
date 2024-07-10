const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const auctionRoutes = require('./routes/webRoutes.js');
const { result } = require('lodash');

const app = express();


app.use('/assets', express.static('assets'));

app.use('/auctions', auctionRoutes);

// 
// 
// CONNECT TO DATABASE
// const db = 'mongodb://localhost:27017/MartialPeak';
// mongoose.connect(db)
//     .then((result) => {
//         app.listen(3000);
//         console.log('connected database...');
//         console.log("http://localhost:3000");
//     })
//     .catch((err) => console.log(err));

// 
// 
// Database connection and server start
mongoose.connect('mongodb://localhost:27017/MartialPeak')
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
            console.log("http://localhost:3000");
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

app.set('view engine', 'ejs');

//
//
//MIDDLEWARE
app.use(express.static('styles'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());



// 
// 
// PAGES

// WELCOME PAGE
app.get('/', (req, res) => {
    res.render('welcome', {title: 'Welcome to my Auction'})
})

// ABOUT US PAGE
app.get('/about', (req, res) => {
    res.render('about', {title: 'About us'})
})

// HELP ME PAGE
app.get('/help', (req, res) => {
    res.render('help', {title: 'help me'})
})

// WORKING PAGES AFTER SIGN IN
app.use('/auctions', auctionRoutes);


// 404 PAGE
app.use((req, res) => {
    res.status(404).render('404');
})


