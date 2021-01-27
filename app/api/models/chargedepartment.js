const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ChargeDepartmentSchema = new Schema({
	strCode: {
		type: String,
		unique: true,
	},		
	strDescription: {
		type: String	
	},
	intFacilityID:{
		type:Number
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},
	
});
ChargeDepartmentSchema.plugin(autoIncrement.plugin, 'Chargedepartment');
ChargeDepartmentSchema.plugin(unique, { message: 'That strCode is already taken.' });
module.exports = mongoose.model('Chargedepartment', ChargeDepartmentSchema)