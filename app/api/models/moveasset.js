const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const MoveAssetSchema = new Schema({
    intAssetID: {
        type: Number
    },
    intMoveID: {
        type: Number		
    },
    intSiteID: {
        type: Number
    },
    bolAway: {
        type: Boolean		
    },
    bolPending:{
        type: Boolean
    },
    bolSetOffline:{
        type: Boolean
    },
    intReasonOfflineID:{
        type: Number
    },
    bolSetOnline:{
        type: Boolean
    },
    intReasonOnlineID:{
        type: Number
    },
    dtmReturnDate:{
        type: Date
    },
    dtmDateReturned:{
        type: Date
    },
    intMovedFromID:{
        type: Number
    },
    strFromAisle:{
        type: String
    },
    strFromRow:{
        type: String
    },
    strFromBin:{
        type: String
    },
    strNotes:{
        type: String
    },
    bolExclude:{
        type: Boolean
    },
}); 
MoveAssetSchema.plugin(autoIncrement.plugin, 'MoveAsset');
MoveAssetSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('MoveAsset', MoveAssetSchema)