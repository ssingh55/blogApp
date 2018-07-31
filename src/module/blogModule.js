const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    text: {
        type: String,
        required: [true,'text Field is required']
    },
    _id: {
        type: Number
    },
    description: {
        type: String
    }
});

const blogModule = mongoose.model('blogs',blogSchema);

module.exports = blogModule;