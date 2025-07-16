const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})



const TODO = mongoose.model("TODO",todoSchema);
module.exports = TODO;