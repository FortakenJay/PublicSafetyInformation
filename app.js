const express = require('express');
const morgan = require('morgan');

// express app invoke
const app = express();

//register for view engine
app.set('view engine', 'ejs');

//middleware and static files aka css
app.use(morgan('dev'));
app.use(express.static('css'));
app.use(express.static('images'));

//listen for request
app.listen(3000);

// response website
app.get('/', (req,res) => {
    res.render('main');
});

//404 page MUST BE BELOW EVERYTHING
app.use((req,res) => {
    res.status(404).render('404');
});
