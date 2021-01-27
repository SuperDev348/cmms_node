const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const MeterReadingUnitSchema = new Schema({
	strName: {
		type: String,
		unique: true,
	},		
	strSymbol: {
		type: String	
	},
	intPrecision: {
		type: Number	
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	}
	
});
MeterReadingUnitSchema.plugin(unique, { message: 'That strName is already taken.' });
MeterReadingUnitSchema.plugin(autoIncrement.plugin, 'MeterReadingUnit');
module.exports = mongoose.model('MeterReadingUnit', MeterReadingUnitSchema);