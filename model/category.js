const mongoose = require('mongoose');

const categorySchema = mongoose.schema({
    name: String
});

module.exports = mongoose.models("Category", categorySchema);
