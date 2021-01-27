const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderUserSchema = new Schema({
    intWorkOrderID: {
        type: Number
    },
    intUserID: {
        type: Number		
    },
    bolNotifyOnAssignment: {
        type: Boolean
    },
    bolNotifyOnCompletion: {
        type: Boolean		
    },
    bolNotifyOnOnlineOffline:{
        type: Boolean
    },
    bolNotifyOnStatusChange:{
        type: Boolean
    },
    bolNotifyOnTaskCompleted:{
        type: Boolean
    }
}); 
WorkOrderUserSchema.plugin(autoIncrement.plugin, 'WorkOrderUser');
WorkOrderUserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('WorkOrderUser', WorkOrderUserSchema)