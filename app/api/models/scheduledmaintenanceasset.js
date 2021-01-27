const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduledMaintenanceAssetSchema = new Schema({
    intScheduledMaintenanceID: {
        type: Number,
        required: [true, 'intScheduledMaintenanceID is required.'],
    },
    intAssetID: {
        type: Number		
    }
}); 
ScheduledMaintenanceAssetSchema.plugin(autoIncrement.plugin, 'ScheduledMaintenanceAsset');
ScheduledMaintenanceAssetSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ScheduledMaintenanceAsset', ScheduledMaintenanceAssetSchema)