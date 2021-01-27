const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;

const assetIdSchema = new Schema({
  idNumber: {
    type: Number,
  },
  userId: {
    type: String,
  },  
  AddedDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("assetId", assetIdSchema);
