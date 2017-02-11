const mongoose = require('mongoose');

const cartSchema = mongoose.schema({
    userId: String,
    items: [{
        count: Number,
        item: {
            type: mongoose.Schema.ObjectId,
            ref: 'Item'
        }
    }]
});

module.exports = mongoose.models('Cart', cartSchema);