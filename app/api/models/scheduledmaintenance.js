const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduledMaintenaceSchema = new Schema({
	intPriorityID: {
		type: Number,		
	},
	intSiteID:{
		type:Schema.Types.Number,
		ref:"Asset",		
	},
	intStartAsWorkOrderStatusID:{
		type:Number
	},
	intScheduledMaintenanceStatusID:{
		type:Number,
		default:0
	},
	intSuggestedCompletion:{
		type:Number
	},
	dtmUpdatedDate:{
		type:Date,
		default: Date.now,
	},
	strCode:{
		type:String
	},
	intProjectID:{
		type:Schema.Types.Number,
		ref:"Project"
	},
	strCompletionNotes:{
		type:String
	},
	dtmCreateDate:{
		type:Date,
		default: Date.now,
	},
	intMaintenanceTypeID:{
		type:Number
	},
	intRequestorUserID:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	strDescription:{
		type:String
	},
	bolCanFireSMWithOpenWO:{
		type:Boolean
	},
	bolWORequiresSignature:{
		type:Boolean
	},
	intAccountID:{// cusomize by mine.
		type:Schema.Types.Number,
		ref:"Account"
	},
	intChargeDepartmentID:{
		type:Schema.Types.Number,
		ref:"Chargedepartment"
	},
	intAssignedToUserID:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},	
	strWorkInstruction:{
		type:String
	},
	dblTimeEstimatedHours:{
		type:Number
	},
	strAssets: {// customized for me
		type: String,
		default:""
	},
	strAssetIds: { // customized for me
		type: String,
		default:""
   },
   strAssignedUser: { // customized for me
	type: String,
	default:""
	},
	intEstimatedHour: { // customized for me
		type: Number,
		default:""
	},
});
ScheduledMaintenaceSchema.plugin(autoIncrement.plugin, 'ScheduledMaintenace');
// ScheduledMaintenaceSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ScheduledMaintenace', ScheduledMaintenaceSchema)