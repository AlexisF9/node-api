const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors()) // donner l'accessibiliter de notre api

//app.use(cors({origin: 'https://...'})); donne l'accès pour un seul site

app.use(bodyParser.json());

// les données de postsController s'affiche sur localhost:5500/posts
app.use('/posts', postsRoutes);

// l'application ce lance sur le localhost:5500
app.listen(5500, () => console.log("Serveur started"));

