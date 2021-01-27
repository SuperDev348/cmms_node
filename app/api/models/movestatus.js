const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const MoveStatusSchema = new Schema({
    intSysCode: {
        type: Number
    },
    strDefaultLabel: {
        type: String		
    },
    strName: {
        type: String
    }
}); 
MoveStatusSchema.plugin(autoIncrement.plugin, 'MoveStatus');
MoveStatusSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('MoveStatus', MoveStatusSchema)