const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderUserSchema = new Schema({
    intAssetID: {
        type: Number,
        required: [true, 'intAssetID is required.'],
    },
    intMoveBackID: {
        type: Number,
        required: [true, 'intMoveBackID is required.'],	
    },
    intOriginalMoveAssetID: {
        type: Number,
        required: [true, 'intOriginalMoveAssetID is required.'],
    },
    bolPending: {
        type: Boolean		
    },
    bolSetBackOnline:{
        type: Boolean
    },
    intReasonOnlineID:{
        type: Number
    },
    bolSetBackOffline:{
        type: Boolean
    },
    intReasonOfflineID: {
        type: Number		
    },
    strToAisle: {
        type: String
    },
    strToBin: {
        type: String		
    },
    strToRow:{
        type: String
    },
    intSiteID:{
        type: Number,
        required: [true, 'intSiteID is required.'],
    },
    strNotes:{
        type: String
    },
    bolExclude:{
        type: Boolean
    }
}); 
WorkOrderUserSchema.plugin(autoIncrement.plugin, 'MoveBackAsset');
WorkOrderUserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('MoveBackAsset', WorkOrderUserSchema)