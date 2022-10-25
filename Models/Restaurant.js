const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    type: {
        type: Array,
        required: true
    },
    cuisine_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.models.Restaurant || mongoose.model('Restaurant', RestaurantSchema);