const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    intSiteID: {
        type: Number,
        required: [true, 'intSiteID is required.'],
    },
    dtmDateReceived: {
        type: Date		
    },
    dtmDateOrdered: {
        type: Date
    },
    intReceiptStatusID: {
        type: Number,
        required: [true, 'intReceiptStatusID is required.'],	
    },
    intPurchaseCurrencyID:{
        type: Number
    },
    intUserDestinationID:{
        type: Number
    },
    intPurchaseOrderID:{
        type: Number
    },
    intCode:{
        type: Number,
        required: [true, 'intCode is required.'],
    },
    intSupplierID:{
        type: Number
    },
    intUpdated:{
        type: Number
    },
    strPackingSlip:{
        type: String
    }
}); 
ReceiptSchema.plugin(autoIncrement.plugin, 'Receipt');
ReceiptSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('Receipt', ReceiptSchema)