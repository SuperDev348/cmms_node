const mongoose = require('mongoose');
// const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const ScheduleTriggerSchema = new Schema({
	
	bolTSWFriday:{
		type:Boolean,
		default:false
	},
	bolTSWMonday:{
		type:Boolean,
		default:false
	},
	bolTSWSaturday:{
		type:Boolean
	},
	bolTSWSunday:{
		type:Boolean,
		default:false
	},	
	bolTSWThursday:{
		type:Boolean,
		default:false
	},
	bolTSWTuesday:{
		type:Boolean,
		default:false
	},
	bolTSWWednesday:{
		type:Boolean,
		default:false
	},
	strDatLogicHourly:{
		type:String		
	},
	strDatLogicDaily:{
		type:String		
	},
	strDatLogicMonthly:{
		type:String		
	},
	strDatLogicYearly:{
		type:String		
	},
	datTREndBy:{
		type:Date		
	},
	datTRStart:{
		type:Date		
	},
	dblLastMeterReading:{
		type:Number		
	},
	dblRMeterReading:{
		type:Number		
	},
	dblROMeterReading:{
		type:Number		
	},
	dblRREndBy:{
		type:Number		
	},
	dblRRStart:{
		type:Number		
	},
	dtmLastTriggered:{
		type:Date		
	},
	intAssetEventTypeID:{
		type: Schema.Types.Number,
		ref:"AssetEventType"
	},
	intRMeterReadingUnitID:{
		type: Schema.Types.Number,
		ref:"MeterReadingUnit"
	},
	intROMeterReadingUnitID:{
		type: Schema.Types.Number,
		ref:"MeterReadingUnit"
	},
	intRREndAfter:{
		type:Number
	},
	intScheduledMaintenanceID:{
		type: Schema.Types.Number,
		ref:"ScheduledMaintenace"
	},
	intTREndAfter:{
		type:Number
	},
	intTSDEveryDays:{
		type:Number
	},
	intTSHEveryHours:{
		type:Number
	},
	intTSMDayOfMonth:{
		type:Number
	},
	intTSMEveryMonths:{
		type:Number
	},
	intTSWEveryWeeks:{
		type:Number
	},
	intTSYDayOfMonth:{
		type:Number
	},
	intTSYEveryYears:{
		type:Number
	},
	intTSYMonthOfYear:{
		type:Number
	},
	strROType:{
		type:String
	},
	strRRType:{
		type:String
	},
	strRType:{
		type:String
	},
	strTRType:{
		type:String
	},
	strTSType:{
		type:String
	},
	strType:{
		type:String
	},
	strMrLogic:{
		type:String
	},
	bolMrByWOClosed:{
		type:Boolean
	},
	bolCreateWorkOrderOnStartDate:{
		type:Boolean
	},
	intAssetID:{
		type: Schema.Types.Number,
		ref:"Asset"
	},
	strScheduleDescription:{
		type:String
	},
	intTRTriggerTime:{
		type:Number
	},
	intUpdated:{
		type:Date,
		default: Date.now,
	},
	intHowOften:{
		type:Number
	},
	strthreshold:{//customized me
		type:String
	},
	strCurrentTime:{ //customized me
		type:String
	},
	intScheduledMaintenanceStatusID:{ //customized me
		type:Number
	}
	// bolDatLogicHourly:{//customize
	// 	type:Boolean
	// },
	// bolDatLogicDaily:{//customize
	// 	type:Boolean
	// },
	// bolDatLogicWeekly:{//customize
	// 	type:Boolean
	// },
	// bolDatLogicMonthly:{//customize
	// 	type:Boolean
	// },
	// bolDatLogicYearly:{//customize
	// 	type:Boolean
	// }
});
ScheduleTriggerSchema.plugin(autoIncrement.plugin, 'ScheduleTrigger');
// ScheduledMaintenaceSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ScheduleTrigger', ScheduleTriggerSchema)