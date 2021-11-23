const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors()) // donner l'accessibiliter de notre api
//app.use(cors({origin: 'https://...'})); donne l'accès pour un seul site
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log("Serveur started"));

