const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const Connection = require('./config/db.js');
const Router = require('./routes/routes.js');


const app = express();
dotenv.config();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/grocery', Router);


const PORT = process.env.PORT || 4000;


Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));