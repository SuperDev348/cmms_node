const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
	strName: {
		type: String,
		trim: true,		
		unique: true,
		required: [true, 'strName is required.'],
	},
	strDescription: {
		type: String		
	},
	strMake: {
		type: String		
	},
	strModel: {
		type: String		
	},
	qtyMinStockCount: {
		type: Number		
	},
	strCity:{
		type:String
	},
	strShippingTerms:{
		type:String
	},
	strAddress:{
		type:String
	},
	strNotes:{
		type:String
	},
	strProvince:{
		type:String
	},
	intCountryID:{
		type:Number
	},
	strInventoryCode:{
		type:String
	},
	qtyStockCount:{
		type:Number
	},
	intSiteID:{
		type:Number
	},
	strRow:{
		type:String
	},
	strMASourceProduct:{
		type:String
	},
	strAisle:{
		type:String
	},
	strBinNumber:{
		type:String
	},
	intCategoryID:{
		type:Number
	},
	strPostalCode:{
		type:String
	},
	strSerialNumber:{
		type:String
	},
	strCode:{
		type:String
	},
	dblLatitude:{
		type:Number
	},
	dblLongitude:{
		type:Number
	},
	strUnspcCode:{
		type:String
	},
	dblLastPrice:{
		type:Number
	},
	bolIsBillToFacility:{
		type:Boolean
	},
	intAssetLocationID:{
		type:Number
	},
	bolIsOnline:{
		type:Boolean
	},
	bolIsShippingOrReceivingFacility:{
		type:Boolean
	},
	intKind:{
		type:Number
	},
	strQuotingTerms:{
		type:String
	},
	intAssetParentID:{
		type:Number
	},
	bolIsRegion:{
		type:Boolean
	},
	bolIsSite:{
		type:Boolean
	},	
	intAccountID:{
		type:Number
	},
	intChargeDepartmentID:{
		type:Number
	},
	intSuperCategorySysCode:{
		type:Number
	},
	strCustomerIds:{
		type:String
	},
	strStockLocation:{
		type:String
	},
	strVendorIds:{
		type:String
	},
	intUpdated:{
		type:Number
	},
	strBarcode:{
		type:String
	},
	dv_intAccountID:{
		type:String
	},
	dv_intCategoryID:{
		type:String
	},
	dv_intSiteID:{
		type:String
	},
	dv_intCountryID:{
		type:String
	},
	dv_intAssetLocationID:{
		type:String
	},
	dv_intChargeDepartmentID:{
		type:String
	},
	dv_intAssetParentID:{
		type:String
	},
	cf_getLatestReadingsFor:{
		type:String
	},
	cf_intDefaultImageFileThumbnailID:{
		type:String
	},
	cf_intDefaultImageFileID:{
		type:String
	},
	cf_intAddressAssetID:{
		type:String
	},
	cf_assetAddressString:{
		type:String
	},
	intCategoryKind:{
		type:Number //customized field for mine
	},
	strCountryName:{ //customized field for mine
		type:String
	}
	
});
AssetSchema.plugin(autoIncrement.plugin, 'Asset');
AssetSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('Asset', AssetSchema)