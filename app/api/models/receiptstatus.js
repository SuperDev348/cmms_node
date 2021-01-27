const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ReceiptStatusSchema = new Schema({
    strName: {
        type: String,
        required: [true, 'strName is required.'],
    },
    intControlID: {
        type: Number,
        required: [true, 'intControlID is required.'],	
    },
    intSysCode: {
        type: Number
    },
    strDefaultLabel: {
        type: String		
    },
    intUpdated:{
        type: Number
    }
}); 
ReceiptStatusSchema.plugin(autoIncrement.plugin, 'ReceiptStatus');
ReceiptStatusSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ReceiptStatus', ReceiptStatusSchema)