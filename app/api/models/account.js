const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	strCode: {
		type: String,
		unique: true,
	},		
	strDescription: {
		type: String	
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},
	
});
AccountSchema.plugin(autoIncrement.plugin, 'Account');
AccountSchema.plugin(unique, { message: 'That strCode is already taken.' });
module.exports = mongoose.model('Account', AccountSchema)