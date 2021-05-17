
const assetCategoryModel = require('../models/assetcategory');					

module.exports = {
	getById: function(req, res, next) {	
		assetCategoryModel.findById(req.params.Id, function(err, asset){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: asset});
			}
		});
	},

	getAll: function(req, res, next) {
		assetCategoryModel.find({}, function(err, assetcategory){
			if (err){
				res.status(500).json({ msg: "Internal Server error" });
			} else{				
				res.status(200).json({msg: "Found!", data: assetcategory});							
			}

		});
	},

	updateById: function(req, res, next) {
		
		var assetCategory={};
		assetCategory.strName=req.body.strName;
		assetCategory.intParentID=req.body.intParentID;
		assetCategoryModel.findByIdAndUpdate(req.params.Id,assetCategory, function(err, movieInfo){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {		
	
		assetCategoryModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var assetCategory={};
		assetCategory.strName=req.body.strName;
		assetCategory.intParentID=req.body.intParentID;
		if(req.body.strName=="Equipment"){
			assetCategory.intSysCode=2
		}
		else if(req.body.strName=="Locations And Facilities")	{
			assetCategory.intSysCode=1
		}
		else if(req.body.strName=="Tools")	{
			assetCategory.intSysCode=3
		}
		else if(req.body.strName=="Parts And Supplies")	{
			assetCategory.intSysCode=4
		}
		else if(req.body.strName=="Inventory Storage")	{
			assetCategory.intSysCode=5
		}
		else if(req.body.strName=="Buildings")	{
			assetCategory.intSysCode=6
		}
		else if(req.body.strName=="Plants")	{
			assetCategory.intSysCode=7
		}
		else if(req.body.strName=="Regions")	{
			assetCategory.intSysCode=10
		}
		else if(req.body.strName=="Rotating Spares")	{
			assetCategory.intSysCode=11
		}
		else if(req.body.strName=="Assets")	{
			assetCategory.intSysCode=0
		}
		else{
			assetCategory.intSysCode=12
		}
		assetCategoryModel.create(assetCategory, function (err, result) {

				  if (err) {					
					if (err.errors) {	
						if (err.errors.strName) {
							res.status(400).json({ msg: err.errors.strName.message });
							return;
						  }
						if (err.errors.intParentID) {
							res.status(400).json({ msg: err.errors.intParentID.message });
							return;
						}
					}
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
				  
				});
	},
	// createNumberId: function(req, res, next) {

	// 	//assetNumberIdModel.remove().exec();
	// 	let numberModal={};
	// 	numberModal.userId=req.body.userId;
	
	// 	let findQuery=assetNumberIdModel.find({userId : req.body.userId}).sort({idNumber : -1}).limit(1);
	// 	findQuery.exec(function(err, maxResult){
	// 		if (err) {return err;}
	// 		console.log(maxResult,'maxx id');
	// 		var maxNumber=1;
	// 		if(maxResult.length>0){
	// 			maxNumber=maxResult[0].idNumber+1;
	// 			numberModal.idNumber=maxNumber;
	// 			assetNumberIdModel.updateOne({userId : req.body.userId}, numberModal,  function(err, result) {
	// 				if (err) return status(200).json(500, {error: err});
	// 				res.status(200).json({msg: "asset Number updated!", data: maxNumber});
	// 			});
	// 		}
	// 		else{
	// 			numberModal.idNumber=maxNumber;
	// 			assetNumberIdModel.create(numberModal, function (err, result) {
	// 				if (err) return status(200).json(500, {error: err});
	// 				res.status(200).json({msg: "asset Number created!", data: maxNumber});
	// 			 });
	// 		}	
	// 	});	
	// }

}					