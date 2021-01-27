const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const FileContentsSchema = new Schema({
    strName: {
        type: String
    },
    strMimeType: {
        type: String		
    },
    intSize: {
        type: Number
    },
    intSysCode: {
        type: Number		
    },
    strUuid:{
        type: String
    }
}); 
FileContentsSchema.plugin(autoIncrement.plugin, 'FileContents');
FileContentsSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('FileContents', FileContentsSchema)