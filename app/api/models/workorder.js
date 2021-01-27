const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
// const { schema } = require('./users');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderSchema = new Schema({
	strAssignedUserIds: {
		type: String
	},	
	intAssignedUserId:{ // mine customize
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	intPriorityID: {
		type: Number
	},
	intWorkOrderStatusID: {		
		type:Number,
		required: [true, 'intWorkOrderStatusID is required.']
	},
	strAssets: {
		type: String,
		default:""
	},
	intSiteID: {
		type: Number,
		required: [true, 'intSiteID is required.']
	},
	strAssignedUsers: {
		type: String		
	},
	intEstimatedHour: {
		type: Number
	},
	intActualHour: {
		type: Number
	},
	intRequestedByUserID: {
		type: String		
	},
	strEmailUserGuest: {
		type: String		
	},
	dtmDateCreated: { //timestamp
		// type: String,
		type: Date,
		default: Date.now,	
	},
	dtmEstimatedStartDate: {
		type: Date
	},
	strAssetIds: { 
		 type: String,
		 default:""
	},
	dtmDateCompleted: { //timestamp
		type: String		
	},
	intCompletedByUserID: { 
		// type: String		
		type:Schema.Types.ObjectId,
		ref:"User"
	},
	strDescription: { 
		type: String		
	},
	strNameUserGuest: { 
		type: String		
	},
	dtmSuggestedCompletionDate: { //time stamp
		 type: Date
		// type: String		
	},
	strPhoneUserGuest: { 
		type: String		
	},
	strCode: { 
		type: String		
	},
	strCompletionNotes: { 
		type: String		
	},
	intMaintenanceTypeID: { 
		type: Number		
	},
	dtmDateLastModified: { 
		type: String		
	},
	bolRequiresSignature: { 
		type: Boolean		
	},
	dtmDateSigned: { //time stamp
		type: String		
	},
	intSignedByUserID: { 
		type: Number		
	},
	intWorkOrderStatusGroup: { 
		type: Number		
	},
	strAdminNotes: { 
		type: String		
	},
	intRCAActionID: { 
		type: Number		
	},
	intRCACauseID: { 
		type: Number		
	},
	intRCAProblemID: { 
		type: Number		
	},
	strCompletedByUserIds: { 
		type: String		
	},
	strCompletedByUsers: { 
		type: String		
	},
	strCustomerIds: { 
		type: String		
	},
	strVendorIds: { 
		type: String		
	},
	intUpdated: { 
		type: Number		
	},
	intScheduledMaintenanceID: { 
		type: Number		
	},
	intProjectId:{
		type:Number
	},
	//extra fileds
	dv_intPriorityID: { 
		type: String		
	},
	dv_intRequestedByUserID: { 
		type: String		
	},
	dv_intSiteID: { 
		type: String		
	},
	dv_intCompletedByUserID	: { 
		type: String		
	},
	dv_intWorkOrderStatusID	: { 
		type: String		
	},
	dv_intMaintenanceTypeID	: { 
		type: String		
	},
	dv_intRCAActionID	: { 
		type: String		
	},
	dv_intRCACauseID	: { 
		type: String		
	},
	dv_intRCAProblemID	: { 
		type: String		
	},
	dv_intScheduledMaintenanceID: { 
		type: String		
	},
	dv_intSignedByUserID: { 
		type: String		
	},
	// customized for me
	dblTimeEstimatedHours:{ //Estimated Labor
		type:Number
	},
	dblTimeSpentHours:{ //Actual Labor
		type:Number
	}
	
});
// WorkOrderSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
WorkOrderSchema.plugin(autoIncrement.plugin, 'Workorder');
module.exports = mongoose.model('Workorder', WorkOrderSchema)