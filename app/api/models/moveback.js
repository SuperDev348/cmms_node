const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const MoveBackSchema = new Schema({
    intMovedBackByUserID: {
        type: Number
    },
    dtmMoveBackDate: {
        type: Date		
    },
    intRequestedByID: {
        type: Number
    },
    dtmDateRequested: {
        type: Date		
    },
    intConfirmedByID:{
        type: Number
    },
    dtmDateConfirmed:{
        type: Date
    },
    intRejectedByID:{
        type: Number
    },
    dtmDateCanceled: {
        type: Date
    },
    intMoveStatusID: {
        type: Number,
        required: [true, 'intMoveStatusID is required.'],		
    },
    intFromSiteID: {
        type: Number,
        required: [true, 'intFromSiteID is required.'],
    },
    intSiteID: {
        type: Number,
        required: [true, 'intSiteID is required.'],
    },
    strNotes:{
        type: String
    }
}); 
MoveBackSchema.plugin(autoIncrement.plugin, 'MoveBack');
MoveBackSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('MoveBack', MoveBackSchema)