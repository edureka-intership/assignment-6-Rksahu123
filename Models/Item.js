const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    restaurantId: {
        type: String,
        required: true
    },
    ingridients: {
        type: Array
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', ItemSchema);  