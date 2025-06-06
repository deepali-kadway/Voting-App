const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3001;

// Give reference to the express modules, and store it in a variable to use all the functions
const app = express();
app.listen(port, () => { console.log(`Server is running on port ${port}`)});

mongoose.connect('mongodb://0.0.0.0:27017/Voting')
    .then(() => console.log('Connected to DB'))
    .catch(() => console.log('DB connection failed'));

