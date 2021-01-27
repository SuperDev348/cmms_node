
const SchedulTriggerModel = require('../models/scheduletrigger');					

module.exports = {
	getById: function(req, res, next) {		
		SchedulTriggerModel.findById(req.params.Id)
		// ..and populate all of the notes associated with it
		.populate("intAssetEventTypeID")
		.populate("intRMeterReadingUnitID")
		.populate("intROMeterReadingUnitID")
		.populate("intScheduledMaintenanceID")
		.populate("intAssetID")
		.then(function(data) {		
		  // If we were able to successfully find an Product with the given id, send it back to the client
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  // If an error occurred, send it to the client
		  res.status(500).json({ msg: "Internal Server error" });
		});	
	},

	getAll: function(req, res, next) {
		SchedulTriggerModel.find({intScheduledMaintenanceID:req.params.Id})
		// ..and populate all of the notes associated with it
		.populate("intAssetEventTypeID")
		.populate("intRMeterReadingUnitID")
		.populate("intROMeterReadingUnitID")
		.populate("intScheduledMaintenanceID")
		.populate("intAssetID")
		.then(function(data) {		
		  // If we were able to successfully find an Product with the given id, send it back to the client
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  // If an error occurred, send it to the client
		  res.status(500).json({ msg: "Internal Server error" });
		});		
	
	},

	updateById: function(req, res, next) {
		
		var data={};
		data.bolTSWFriday=req.body.bolTSWFriday;	
		data.bolTSWMonday=req.body.bolTSWMonday;	
		data.bolTSWSaturday=req.body.bolTSWSaturday;	
		data.bolTSWSunday=req.body.bolTSWSunday;	
		data.bolTSWThursday=req.body.bolTSWThursday;	
		data.bolTSWTuesday=req.body.bolTSWTuesday;	
		data.bolTSWWednesday=req.body.bolTSWWednesday;	
		data.strDatLogicHourly=req.body.strDatLogicHourly;	
		data.strDatLogicDaily=req.body.strDatLogicDaily;	
		data.strDatLogicMonthly=req.body.strDatLogicMonthly;	
		data.strDatLogicYearly=req.body.strDatLogicYearly;	
		data.datTREndBy=req.body.datTREndBy;	
		data.datTRStart=req.body.datTRStart;	
		data.dblLastMeterReading=req.body.dblLastMeterReading;	
		data.dblRMeterReading=req.body.dblRMeterReading;	
		data.dblROMeterReading=req.body.dblROMeterReading;	
		data.dblRREndBy=req.body.dblRREndBy;	
		data.dblRRStart=req.body.dblRRStart;	
		data.dtmLastTriggered=req.body.dtmLastTriggered;	
		data.intAssetEventTypeID=req.body.intAssetEventTypeID;	
		data.intRMeterReadingUnitID=req.body.intRMeterReadingUnitID;	
		data.intROMeterReadingUnitID=req.body.intROMeterReadingUnitID;	
		data.intRREndAfter=req.body.intRREndAfter;	
		data.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;	
		data.intTREndAfter=req.body.intTREndAfter;	
		data.intTSDEveryDays=req.body.intTSDEveryDays;	
		data.intTSHEveryHours=req.body.intTSHEveryHours;	
		data.intTSMDayOfMonth=req.body.intTSMDayOfMonth;	
		data.intTSMEveryMonths=req.body.intTSMEveryMonths;	
		data.intTSWEveryWeeks=req.body.intTSWEveryWeeks;	
		data.intTSYDayOfMonth=req.body.intTSYDayOfMonth;	
		data.intTSYEveryYears=req.body.intTSYEveryYears;	
		data.intTSYMonthOfYear=req.body.intTSYMonthOfYear;	
		data.strROType=req.body.strROType;	
		data.strRRType=req.body.strRRType;	
		data.strRType=req.body.strRType;	
		data.strTRType=req.body.strTRType;	
		data.strTSType=req.body.strTSType;	
		data.strType=req.body.strType;	
		data.strMrLogic=req.body.strMrLogic;	
		data.bolMrByWOClosed=req.body.bolMrByWOClosed;	
		data.bolCreateWorkOrderOnStartDate=req.body.bolCreateWorkOrderOnStartDate;	
		data.intAssetID=req.body.intAssetID;	
		data.strScheduleDescription=req.body.strScheduleDescription;	
		data.intTRTriggerTime=req.body.intTRTriggerTime;	
		data.intHowOften=req.body.intHowOften;
		data.strthreshold=req.body.strthreshold;
		data.strCurrentTime=req.body.strCurrentTime;	
		data.intScheduledMaintenanceStatusID=req.body.intScheduledMaintenanceStatusID;


		SchedulTriggerModel.findByIdAndUpdate(req.params.Id,data, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		SchedulTriggerModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	
	create: async function(req, res, next) {
	
		var data={};
		data.bolTSWFriday=req.body.bolTSWFriday;	
		data.bolTSWMonday=req.body.bolTSWMonday;	
		data.bolTSWSaturday=req.body.bolTSWSaturday;	
		data.bolTSWSunday=req.body.bolTSWSunday;	
		data.bolTSWThursday=req.body.bolTSWThursday;	
		data.bolTSWTuesday=req.body.bolTSWTuesday;	
		data.bolTSWWednesday=req.body.bolTSWWednesday;	
		data.strDatLogicHourly=req.body.strDatLogicHourly;	
		data.strDatLogicDaily=req.body.strDatLogicDaily;	
		data.strDatLogicMonthly=req.body.strDatLogicMonthly;	
		data.strDatLogicYearly=req.body.strDatLogicYearly;	
		data.datTREndBy=req.body.datTREndBy;	
		data.datTRStart=req.body.datTRStart;	
		data.dblLastMeterReading=req.body.dblLastMeterReading;	
		data.dblRMeterReading=req.body.dblRMeterReading;	
		data.dblROMeterReading=req.body.dblROMeterReading;	
		data.dblRREndBy=req.body.dblRREndBy;	
		data.dblRRStart=req.body.dblRRStart;	
		data.dtmLastTriggered=req.body.dtmLastTriggered;	
		data.intAssetEventTypeID=req.body.intAssetEventTypeID;	
		data.intRMeterReadingUnitID=req.body.intRMeterReadingUnitID;	
		data.intROMeterReadingUnitID=req.body.intROMeterReadingUnitID;	
		data.intRREndAfter=req.body.intRREndAfter;	
		data.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;	
		data.intTREndAfter=req.body.intTREndAfter;	
		data.intTSDEveryDays=req.body.intTSDEveryDays;	
		data.intTSHEveryHours=req.body.intTSHEveryHours;	
		data.intTSMDayOfMonth=req.body.intTSMDayOfMonth;	
		data.intTSMEveryMonths=req.body.intTSMEveryMonths;	
		data.intTSWEveryWeeks=req.body.intTSWEveryWeeks;	
		data.intTSYDayOfMonth=req.body.intTSYDayOfMonth;	
		data.intTSYEveryYears=req.body.intTSYEveryYears;	
		data.intTSYMonthOfYear=req.body.intTSYMonthOfYear;	
		data.strROType=req.body.strROType;	
		data.strRRType=req.body.strRRType;	
		data.strRType=req.body.strRType;	
		data.strTRType=req.body.strTRType;	
		data.strTSType=req.body.strTSType;	
		data.strType=req.body.strType;	
		data.strMrLogic=req.body.strMrLogic;	
		data.bolMrByWOClosed=req.body.bolMrByWOClosed;	
		data.bolCreateWorkOrderOnStartDate=req.body.bolCreateWorkOrderOnStartDate;	
		data.intAssetID=req.body.intAssetID;	
		data.strScheduleDescription=req.body.strScheduleDescription;	
		data.intTRTriggerTime=req.body.intTRTriggerTime;	
		data.intHowOften=req.body.intHowOften;	
		data.strthreshold=req.body.strthreshold;
		data.strCurrentTime=req.body.strCurrentTime;	
		data.intScheduledMaintenanceStatusID=req.body.intScheduledMaintenanceStatusID;

				
		SchedulTriggerModel.create(data, function (err, result) {

				  if (err) {				
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});				  
		});
	},
	

}					