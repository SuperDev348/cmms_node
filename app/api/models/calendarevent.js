const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const CalendarEventSchema = new Schema({
    intScheduledMaintenanceID: {
        type: Number
    },
    intScheduleTriggerID: {
        type: Number,
        require: [true, "intScheduleTriggerID is required."]		
    },
    dtmDate: {
        type: Date,
        require: [true, "dtmDate is required."]
    }
}); 
CalendarEventSchema.plugin(autoIncrement.plugin, 'CalendarEvent');
CalendarEventSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('CalendarEvent', CalendarEventSchema)