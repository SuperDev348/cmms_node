const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduledTaskSchema = new Schema({
	intTaskType: {
		type: Number,		
	},		
	dblTimeEstimatedHours: {
		type: Number	
	},
	intAssetID:{
		type:Schema.Types.Number,
		ref:"Asset"
	},
	intAssignedToUserID:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	intMeterReadingUnitID:{
		type:Schema.Types.Number,
		ref:"MeterReadingUnit"
	},
	intOrder:{
		type:Number
	},
	intParentScheduledTaskID:{
		type:Number
	},
	intScheduledMaintenanceID:{
		type:Number
	},
	strDescription: {
		type: String,		
	},
	
});
ScheduledTaskSchema.plugin(autoIncrement.plugin, 'ScheduledTask');
module.exports = mongoose.model('ScheduledTask', ScheduledTaskSchema)