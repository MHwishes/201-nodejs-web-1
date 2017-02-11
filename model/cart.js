const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: String,
    items: [{
        count: Number,
        item: {
            type: mongoose.Schema.ObjectId,
            ref: 'Item'
        }
    }]
});

module.exports = mongoose.model('Cart', cartSchema);