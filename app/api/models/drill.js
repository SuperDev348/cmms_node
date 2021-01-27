const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
// const { schema } = require('./users');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const DrillSchema = new Schema({
    strCode: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'strCode is required.'],
    },
    strStatus: {
        type: String
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
	},
	aActionAssignCompletionDate: {
		type: Date		
	},
	strActionNarrative: {
		type: String		
	},
	strActionNarrativeFuture: {
		type: String
	}
	
});
// DrillSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
DrillSchema.plugin(autoIncrement.plugin, 'Drill');
module.exports = mongoose.model('Drill', DrillSchema)