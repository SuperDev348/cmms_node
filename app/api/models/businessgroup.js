const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const BusinessGroupSchema = new Schema({
    bolIsDefaultManufacturer: {
        type: Boolean
    },
    bolIsDefaultSupplier: {
        type: Boolean		
    },
    intRelationshipType: {
        type: Number
    },
    strName: {
        type: String		
    }
}); 
BusinessGroupSchema.plugin(autoIncrement.plugin, 'BusinessGroup');
BusinessGroupSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('BusinessGroup', BusinessGroupSchema)