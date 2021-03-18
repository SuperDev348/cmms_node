const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduledMaintenancePartSchema = new Schema({
	intScheduledMaintenanceID:{
		type:Number
	},
	intPartID:{
		type:Number
	},
	intAssetID:{
		type:Number
	},
	intStockID:{    
 		type:Number
	},
	qtySuggestedQuantity:{
		type:Number
	}
});
ScheduledMaintenancePartSchema.plugin(autoIncrement.plugin, 'ScheduledMaintenancePart');
// ScheduledMaintenaceSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ScheduledMaintenancePart', ScheduledMaintenancePartSchema)