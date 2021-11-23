const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId; // pour le put

const {PostsModel} = require('../models/postsModel');

// Réccuperer les données de l'API avec la méthode GET
router.get('/', (req, res) => {
    PostsModel.find((err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log("Error to get data : " + err);
        }
    })
})

// Ajouter du contenu avec la methode POST
// utilisation de body-parser (cf index) pour ajouter des données
router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });
    newRecord.save((err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log('Error creating new data : ' + err);
        }
    })
});

// Modifier des données
router.put('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) { // si id n'est pas connu
        return res.status(400).send("ID unknown : " + req.params.id)
    }

    const udpateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set: udpateRecord},
        {new: true},
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                console.log("Update error : " + err);
            }
        }
    )
});

// Supprimer des données
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) { // si id n'est pas connu
        return res.status(400).send("ID unknown : " + req.params.id)
    }

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                console.log("Delete error : " + err);
            }
        }
    );
})

module.exports = router