const express = require('express');
const port = 3001;
const app = express(); // create express app
const router = require('./routes');

const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://mathieu38:mathieu38test@cluster0.j6kxzrz.mongodb.net/test';

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});