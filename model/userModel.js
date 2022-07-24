const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type: String
    },
    userAddress:{
        type: String
    }
});

module.exports = mongoose.model('Users', User);