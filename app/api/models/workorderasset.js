const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderAssetSchema = new Schema({
    intWorkOrderID: {
        type: Number
    },
    intAssetID: {
        type: Number		
    },
    intUpdated: {
        type: Number
    }
}); 
WorkOrderAssetSchema.plugin(autoIncrement.plugin, 'WorkOrderAsset');
WorkOrderAssetSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('WorkOrderAsset', WorkOrderAssetSchema)