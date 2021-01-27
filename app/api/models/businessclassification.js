const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const BusinessClassificationSchema = new Schema({
    strName: {
        type: String,
        unique: true,
        require: [true, 'strName is required.'],
    }
}); 
BusinessClassificationSchema.plugin(autoIncrement.plugin, 'BusinessClassification');
BusinessClassificationSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('BusinessClassification', BusinessClassificationSchema)