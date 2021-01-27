const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;
const AssetEventTypeSchema = new Schema({
	strEventCode: {
		type: String,
		unique: true,
	},		
	strEventDescription: {
		type: String	
	},
	strEventName: {
		type: String	
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},	
});
AssetEventTypeSchema.plugin(autoIncrement.plugin, 'AssetEventType');
AssetEventTypeSchema.plugin(unique, { message: 'That EventCode is already taken.' });
module.exports = mongoose.model('AssetEventType', AssetEventTypeSchema)