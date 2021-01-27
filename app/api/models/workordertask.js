const mongoose = require('mongoose');
// const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderTaskSchema = new Schema({
	intWorkOrderID:{
		type:Schema.Types.Number,
		ref:"Workorder"
	},
	intTaskType:{
		type:Number,
		default:0
	},
	strResult:{
		type:String
	},
	intAssetID:{
		type:Schema.Types.Number,
		ref:"Asset"
	},
	intOrder:{
		type:Number
	},
	dtmStartDate:{
		type:Date
	},
	dtmDateCompleted:{
		type:Date
	},
	intCompletedByUserID:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	intAssignedToUserID:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	dblTimeEstimatedHours:{
		type:Number
	},
	dblTimeSpentHours:{
		type:Number
	},
	intMeterReadingUnitID:{
		type: Schema.Types.Number,
		ref:"MeterReadingUnit"
	},
	strDescription:{
		type: String		
	},
	strTaskNotesCompletion:{
		type: String		
	},
	intTaskGroupControlID:{
		type: Number		
	},
	intParentWorkOrderTaskID:{
		type: Number		
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},
	bolInspection:{ //true:pass, false:Fail
		type:Boolean,
		default:false
	}
	
});
WorkOrderTaskSchema.plugin(autoIncrement.plugin, 'WorkOrderTask');
module.exports = mongoose.model('WorkOrderTask', WorkOrderTaskSchema)