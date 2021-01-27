const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const MoveSchema = new Schema({
    intDestinationTypeID: {
        type: Number,
        required: [true, 'intDestinationTypeID is required.'],
    },
    intAssetDestinationID: {
        type: Number		
    },
    strAisle: {
        type: String
    },
    strRow: {
        type: String		
    },
    strBin:{
        type: String
    },
    intUserDestinationID:{
        type: Number
    },
    intBusinessDestinationID:{
        type: Number
    },
    intWorkOrdrDestinationID:{
        type: Number
    },
    intProjectDestinationID:{
        type: Number
    },
    intSiteID:{
        type: Number,
        required: [true, 'intSiteID is required.'],
    },
    intFromSiteID:{
        type: Number,
        required: [true, 'intFromSiteID is required.'],
    },
    intMoveStatusID:{
        type: Number,
        required: [true, 'intMoveStatusID is required.'],
    },
    intRequestedByID:{
        type: Number
    },
    dtmDateRequested:{
        type: Date
    },
    intMovedByID:{
        type: Number
    },
    dtmMoveDate:{
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
    dtmDateRejected:{
        type: Date
    },
    strNotes:{
        type: String
    },
}); 
MoveSchema.plugin(autoIncrement.plugin, 'Move');
MoveSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('Move', MoveSchema)