const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const MeterReadingSchema = new Schema({
	intWorkOrderID: {
		type: Number,		
	},	
	intSubmittedByUserID: {
		type: Schema.Types.ObjectId,
		ref:"User",
	},
	intMeterReadingUnitsID: {	
		type:Schema.Types.Number,
		ref:"MeterReadingUnit",
		required: [true, 'intMeterReadingUnitsID is required.']
	},
	dblMeterReading: {
		type: Number,
		required: [true, 'dblMeterReading is required.']
	},
	intAssetID: {
		type: Number,
		required: [true, 'intAssetID is required.']
	},
	dtmDateSubmitted: {
		type: Date,
		default: Date.now,
	},	
	intUpdated: {
		type: Date,
		default: Date.now,
	}
	
});
// MeterReadingSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
MeterReadingSchema.plugin(autoIncrement.plugin, 'MeterReading');
module.exports = mongoose.model('MeterReading', MeterReadingSchema);