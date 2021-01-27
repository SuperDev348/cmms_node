const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
// const { schema } = require('./users');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduledDrillSchema = new Schema({
    strCode: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'strCode is required.'],
    },
    bStatus: {
        type: Boolean
    },
	strCategory: {
		type: String
	},	
	strType:{
		type: String
	},
	strTitle: {
		type: String
	},
	intEstimatedTime: {		
		type:Number
	},
	aDueDate: {
		type: Date
	},
	strGeneralAssignee: {
		type: String
	},
	strGeneralDescription: {
		type: String		
	}
	
});
// ScheduledDrillSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
ScheduledDrillSchema.plugin(autoIncrement.plugin, 'ScheduledDrill');
module.exports = mongoose.model('ScheduledDrill', ScheduledDrillSchema)