const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const ReceiptLineItemSchema = new Schema({
    intStockID: {
        type: Number
    },
    qtyQuantityReceived: {
        type: Number
    },
    qtyQuantityOrdered: {
        type: Number
    },
    intAssetID: {
        type: Number
    },
    intReceiptID: {
        type: Number,
        required: [true, 'intControlID is required.'],	
    },
    strDescription: {
        type: String
    },
    intParentReceiptLineItemID: {
        type: Number		
    },
    dtmDateExpiryOfInventoryItems:{
        type: Date
    },
    dblPurchasePricePerUnit: {
        type: Number		
    },
    intReceiveToStockID: {
        type: Number		
    },
    intReceiveToFacilityID: {
        type: Number		
    },
    intUpdated: {
        type: Number		
    }
}); 
ReceiptLineItemSchema.plugin(autoIncrement.plugin, 'ReceiptLineItem');
ReceiptLineItemSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ReceiptLineItem', ReceiptLineItemSchema)