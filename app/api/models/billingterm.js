const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const BillingTermSchema = new Schema({
    strName: {
        type: String,
        unique: true,
        required: [true, 'strName is required.'],	
    },
    intUpdated: {
        type: Number
    }
}); 
BillingTermSchema.plugin(autoIncrement.plugin, 'BillingTerm');
BillingTermSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('BillingTerm', BillingTermSchema)