const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    groceryItem : {
        type: String,
        required: true
    },
    isPurchased : {
        type: Boolean,
        default : true
    }
});

module.exports = mongoose.model('grocery', grocerySchema);
