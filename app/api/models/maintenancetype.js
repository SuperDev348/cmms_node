const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const MaintenanceTypeSchema = new Schema({
    strName: {
        type: String
    },
    intSysCode: {
        type: Number		
    },
    strColor: {
        type: String
    },
    intUpdated: {
        type: Number		
    },
    strUuid:{
        type: String
    }
}); 
MaintenanceTypeSchema.plugin(autoIncrement.plugin, 'MaintenanceType');
MaintenanceTypeSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('MaintenanceType', MaintenanceTypeSchema)