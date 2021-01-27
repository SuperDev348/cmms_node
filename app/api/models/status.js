const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
//Define a schema
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
	strName: {
		type: String,
		unique: true,
	},		
	strDescription: {
		type: String	
	},	
	
});
StatusSchema.plugin(unique, { message: 'That Status is already taken.' });
module.exports = mongoose.model('Status', StatusSchema)