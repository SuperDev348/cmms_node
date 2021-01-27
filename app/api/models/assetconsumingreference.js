const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const AssetConsumingReferenceSchema = new Schema({
    intConsumesAssetID: {
        type: Number
    },
    intBOMControlID: {
        type: Number		
    },
    intAssetID: {
        type: Number
    },
    intBOMPartControlID: {
        type: Number		
    },
    qtyMaxConsumption:{
        type: Number
    },
    intUpdated:{
        type: Number
    }
}); 
AssetConsumingReferenceSchema.plugin(autoIncrement.plugin, 'AssetConsumingReference');
AssetConsumingReferenceSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('AssetConsumingReference', AssetConsumingReferenceSchema)