const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const assetCategorySchema = new Schema({
  intParentID: {
    type: Number,
    required: [true, 'ParentId is required.'],
  },
  strName: {
    type: String,
    unique: true,
    required: [true, 'strName is required.'],
  },  
  intSysCode: {
    type: Number    
  },
  bolOverrideRules: {
    type: Boolean    
  },  
});
assetCategorySchema.plugin(unique, { message: 'That {PATH} is already taken.' });
assetCategorySchema.plugin(autoIncrement.plugin, 'assetcategory');
module.exports = mongoose.model("assetcategory", assetCategorySchema);
