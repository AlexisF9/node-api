const mongoose = require('mongoose');

const PostsModel = mongoose.model(
    // nom de la base
    "node-api",
    // ce qu'on met dans la collection
    {
        author: {
            type: String,
            required: true
        },
        message : {
            type: String,
            required: true
        },
        // date par default
        date: {
            type: Date,
            default: Date.now
        }
    },
    // nom de la collection
    "posts"
);

module.exports = {PostsModel};

