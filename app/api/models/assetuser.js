const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;
const AssetUserSchema = new Schema({
	intAssetUserTypeID: {
		type: Number,	//1:group,0:user
		default:0
	},	
	dtmDateAdded:{
		type:Date,
		default: Date.now,
	},	
	intUserID: {
		type:Schema.Types.ObjectId,
		ref:"User"	
	},
	intAssetID:{
		type:Schema.Types.Number,
		ref:"Asset"
	}
	
});
AssetUserSchema.plugin(autoIncrement.plugin, 'AssetUser');
module.exports = mongoose.model('AssetUser', AssetUserSchema)