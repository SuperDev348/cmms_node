const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const AssetOfflineTrackerSchema = new Schema({
    intReasonOnlineID: {
        type: Number
    },
    strOnlineAdditionalInfo: {
        type: String		
    },
    dtmOffLineTo: {//timestamp
        type: Date
    },
    intAssetID: {
        type: Number		
    },
    strCity:{
        type: String
    },
    dblProductionHoursAffected:{
        type: Boolean
    },
    dtmOfflineFrom:{//timestamp
        type: Date
    },
    intReasonOfflineID:{
        type: Number
    },
    intSetOnlineByUserID:{
        type: Number
    },
    strOfflineAdditionalInfo:{
        type: String
    },
    intSetOfflineByUserID:{
        type: Number
    },
    intWorkOrderID:{
        type: Number
    }
}); 
AssetOfflineTrackerSchema.plugin(autoIncrement.plugin, 'AssetOfflineTracker');
AssetOfflineTrackerSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('AssetOfflineTracker', AssetOfflineTrackerSchema)