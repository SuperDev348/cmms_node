const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderStatusSchema = new Schema({
	strName: {
		type: String,
		unique: true,
	},	
	intControlID:{
		type:Number
	},	
	intSysCode:{
		type:Number
	},
	intUpdated:{
		type: Date,
		default: Date.now
	}
	// strDescription: {
	// 	type: String	
	// },	
	
});
WorkOrderStatusSchema.plugin(unique, { message: 'That Status is already taken.' });
module.exports = mongoose.model('WorkOrderStatus', WorkOrderStatusSchema)