const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    intWorkOrderID: {
        type: Number
    },
    intFileTypeID: {
        type: Number		
    },
    strName: {
        type: String
    },
    intSize: {
        type: Number		
    },
    strNotes:{
        type: String
    },
    intFileContetsID:{
        type: Number
    },
    intAssetID:{
        type: Number
    },
    strLink:{
        type: String
    },
    intUpdated:{
        type: Number
    },
    strUuid:{
        type: String
    }
}); 
FileSchema.plugin(autoIncrement.plugin, 'File');
FileSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('File', FileSchema)