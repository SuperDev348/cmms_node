const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');
const saltRounds = 10;

//Define a schema
const Schema = mongoose.Schema;
const emailValidator = [
	validate({
	  validator: 'isLength',
	  arguments: [0, 40],
	  message: 'Email must not exceed {ARGS[1]} characters.'
	}),
	validate({
	  validator: 'isEmail',
	  message: 'Email must be valid.'
	})
  ];
const UserSchema = new Schema({
	strFullName: {
		type: String,
		unique: true,
		required: [true, 'strFullName is required.'],
	},
	intUserStatusID:{
		type:Number		
	},
	strTelephone2:{
		type:String
	},
	strEmailAddress: {
		type: String,
		// required: [true, 'strEmailAddress is required.'],
		//unique: true,
		//validate: emailValidator
	},
	password: {
		type: String,		
		// required: [true, 'Password is required.'],
	},
	strUserTitle:{
		type:String
	},
	strPersonnelCode:{
		type:String
	},
	strPersonnelCode:{
		type:String
	},
	strUserName:{
		type: String		
	},
	strTelephone:{
		type:String,
		// required: [true, 'strTelephone is required.']
		
	},
	strNotes:{
		type:String
	},
	strRequestNotes:{
		type:String
	},
	bolGroup:{
		type:Boolean
	},
	bolApiApplicationUser:{
		type:Boolean
	},
	bolApiManaged:{
		type:Boolean
	},
	intUpdated:{
		type:Number
	},
	strPreferences:{
		type:String
	},
	dv_intLocalizationID:{
		type:String
	},
	cf_intSiteIDs:{
		type:String
	},
	cf_intDefaultImageFileID:{
		type:String
	},
	cf_intDefaultImageFileThumbnailID:{
		type:String
	},
	// mine customize
	strGroupIds:{
		type:String
	}

});
UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', UserSchema);