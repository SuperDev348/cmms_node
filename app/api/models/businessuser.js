const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;
const BusinessUserSchema = new Schema({		
	dtmDateAdded:{
		type:Date,
		default: Date.now,
	},	
	intUserID: {
		type:Schema.Types.ObjectId,
		ref:"User"	
	},
	intBusinessID:{
		type:Schema.Types.Number,
		ref:"Business"
	}
	
});
BusinessUserSchema.plugin(autoIncrement.plugin, 'BusinessUser');
module.exports = mongoose.model('BusinessUser', BusinessUserSchema)