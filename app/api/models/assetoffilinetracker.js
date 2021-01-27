const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const AssetOfflineTrackerSchema = new Schema({
	intReasonOnlineID: {
		type: Number,
		unique: true,
	},		
	strOnlineAdditionalInfo: {
		type: String	
	},
	dtmOffLineTo: {
		type: Date	
	},
	intAssetID: {
		type: Date,
		required: [true, 'AssetID is required.'],
	},
	dblProductionHoursAffected:{
		type: String,
	},
	dtmOfflineFrom:{
		type:Date
	},
	intReasonOfflineID:{
		type:String
	},
	intSetOnlineByUserID:{
		type:Number
	},
	strOfflineAdditionalInfo:{
		type:String
	},
	intSetOfflineByUserID:{
		type:Number
	},
	intWorkOrderID:{
		type:Number
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},
	
});
AssetOfflineTrackerSchema.plugin(autoIncrement.plugin, 'AssetOfflineTracker');
AssetOfflineTrackerSchema.plugin(unique, { message: 'That intReasonOnlineID is already taken.' });
module.exports = mongoose.model('AssetOfflineTracker', AssetOfflineTrackerSchema)