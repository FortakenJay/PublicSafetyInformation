const express = require('express');
const morgan = require('morgan');

// express app invoke
const app = express();

//register for view engine
app.set('view engine', 'ejs');

// read files 
const fs = require('fs');
const filePath = "./data.json";

//middleware and static files aka css
app.use(morgan('dev'));
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('Leaflet MAP'));

//listen for request
app.listen(3000);

// response website
app.get('/', (req,res) => {
    res.render('main', {data: null});
});

app.get('/data/:idState', (req,res) => {
    readJSONFileUsingFS(filePath, (err, jsonData) => {
        if (err) {
            return;
        }

        const id = parseInt(req.params.idState);
        const data = getItemById(jsonData, id);
        res.render('main', { data });
    });
});

//404 page MUST BE BELOW EVERYTHING
app.use((req,res) => {
    res.status(404).render('404');
});


function readJSONFileUsingFS(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            callback(err, null); 
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData); 
        } catch (error) {
            console.error('Error parsing JSON:', error);
            callback(error, null); 
        }
    });
}

function getItemById(data, id) {
    return data.find(item => item.id === id);
}




