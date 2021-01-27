const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;
const AssetEventSchema = new Schema({

	intAssetEventTypeID:{	
		type: Schema.Types.Number,
		ref:"AssetEventType",
		required: [true, 'intAssetEventTypeID is required.'],
	},		
	intAssetID: {
		type: Number,
		required: [true, 'intAssetID is required.'],
	},
	intSubmittedByUserID: {
		type: Schema.Types.ObjectId,
		ref:"User",
	},
	intWorkOrderID: {
		type: Number	
	},
	strAdditionalDescription:{
		type:String
	},
	dtmDateSubmitted: {
		type: Date,
		default: Date.now,
	},	
});
AssetEventSchema.plugin(autoIncrement.plugin, 'AssetEvent');
// AssetEventSchema.plugin(unique, { message: 'That EventCode is already taken.' });
module.exports = mongoose.model('AssetEvent', AssetEventSchema)