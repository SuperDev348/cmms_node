const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
	strProvince: {
		type: String,
	},		
	strPostalCode: {
		type: String	
	},
	strTimezone: {
		type: String	
	},
	strPrimaryEmail: {
		type: String	
	},
	strName: {
		type: String	
	},
	strPhone: {
		type: String	
	},
	strFax: {
		type: String	
	},
	intCountryID: { //country name
		type: String	
	},
	strAddress: { 
		type: String	
	},
	strPrimaryContact: { 
		type: String	
	},
	strNotes: { 
		type: String	
	},
	strPhone2: { 
		type: String	
	},
	strCode: { 
		type: String	
	},
	strCity: { 
		type: String	
	},
	strSecondaryEmail: { 
		type: String	
	},
	intUpdated: {
		type: Date,
		default: Date.now,
	},
	// Extra fields
	dv_intCountryID: { // Extra fields
		type: String	
	},
	cf_intDefaultImageFileID: { // Extra fields
		type: String	
	},
	cf_intDefaultImageFileThumbnailID: { // Extra fields
		type: String	
	},
	strPrimaryCurrency:{
		type:String
	},
	strWebSite:{
		type:String
	},
	intBusinessClassificationId:{
		type:Number
	},
	strBusinessClassification:{
		type:String
	}
});
BusinessSchema.plugin(autoIncrement.plugin, 'Business');
// BusinessSchema.plugin(unique, { message: 'That strCode is already taken.' });
module.exports = mongoose.model('Business', BusinessSchema)