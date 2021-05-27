
const businessModel = require('../models/business');					
        
module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		businessModel.findById(req.params.Id, function(err, result){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	// getAll: function(req, res, next) {
	// 	businessModel.find({}, function(err, result){
	// 		if (err){
	// 			res.status(500).json({ msg: "Internal Server error" });
	// 		} else{				
	// 			res.status(200).json({msg: "Result found!", data: result});							
	// 		}
	// 	});
	// },

	updateById: function(req, res, next) {
		
		var data={};
		data.strProvince=req.body.strProvince;
		data.strPostalCode=req.body.strPostalCode;
		data.strTimezone=req.body.strTimezone;
		data.strPrimaryEmail=req.body.strPrimaryEmail;
		data.strName=req.body.strName;
		data.strPhone=req.body.strPhone;
		data.strFax=req.body.strFax;
		data.intCountryID=req.body.intCountryID;
		data.strAddress=req.body.strAddress;
		data.strPrimaryContact=req.body.strPrimaryContact;
		data.strNotes=req.body.strNotes;
		data.strPhone2=req.body.strPhone2;
		data.strCode=req.body.strCode;
		data.strCity=req.body.strCity;
		data.strSecondaryEmail=req.body.strSecondaryEmail;	
		data.strPrimaryCurrency=req.body.strPrimaryCurrency;	
		data.strWebSite=req.body.strWebSite;
		data.strBusinessClassification=req.body.strBusinessClassification;

		console.log(data,req.params.Id)
		businessModel.findByIdAndUpdate(req.params.Id,data, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	// deleteById: function(req, res, next) {
	// 	businessModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
	// 		if(err)
	// 			res.status(400).json({ msg: "Delete failed!" });
	// 		else {
	// 			res.status(200).json({ msg: "Deleted successfully!"});
	// 		}
	// 	});
	// },

	createAndGet: async function(req, res, next) {
	
		var data={};
		data.strProvince="";
		data.strPostalCode="";
		data.strTimezone="";
		data.strPrimaryEmail="";
		data.strName="";
		data.strPhone="";
		data.strFax="";
		data.intCountryID="";
		data.strAddress="";
		data.strPrimaryContact="";
		data.strNotes="";
		data.strPhone2="";
		data.strCode="";
		data.strCity="";
		data.strSecondaryEmail="";
		data.strPrimaryCurrency="";
		data.strWebSite="";
		data.strBusinessClassification="";
		// data.intBusinessClassificationId=req.body.intBusinessClassificationId;

		let business=await businessModel.find({}).exec();

		if(business.length>0){
			res.status(200).json({msg: "Created successfully!", data:business[0]});
		}
		else{
			businessModel.create(data, function (err, result) {

				if (err) {				
				  res.status(400).json({ msg: "Creat failed", data: null});
				}				  
				else
					res.status(200).json({msg: "Created successfully!", data:result});				  
			 });
		}
	
	},
	create: async function(req, res, next) {
	
		var data={};
		data.strProvince=req.body.strProvince;
		data.strPostalCode=req.body.strPostalCode;
		data.strTimeZone=req.body.strTimeZone;
		data.strPrimaryEmail=req.body.strPrimaryEmail;
		data.strName=req.body.strName;
		data.strPhone=req.body.strPhone;
		data.strFax=req.body.strFax;
		data.intCountryID=req.body.intCountryID;
		data.strAddress=req.body.strAddress;
		data.strPrimaryContact=req.body.strPrimaryContact;
		data.strNotes=req.body.strNotes;
		data.strPhone2=req.body.strPhone2;
		data.strCode=req.body.strCode;
		data.strCity=req.body.strCity;
		data.strSecondaryEmail=req.body.strSecondaryEmail;	
		data.strPrimaryCurrency=req.body.strPrimaryCurrency;
	
		let businessCount=await businessModel.find({}).exec();
	
		businessModel.create(data, function (err, result) {

				  if (err) {				
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});				  
				});
	},
	

}					