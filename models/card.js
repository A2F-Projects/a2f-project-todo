const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {
        type: String, 
        required: [true, "Please input a title!"]
    },
    desc: {
        type: String, 
        
    },
    date: {
        type: Date, 
    },
 
});

module.exports = mongoose.model("cards", cardSchema);