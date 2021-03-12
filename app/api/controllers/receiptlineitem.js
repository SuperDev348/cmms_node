
const receiptlineitemModel = require('../models/receiptlineitem');
const assetModel = require('../models/assets');
const receiptModel = require('../models/receipt');
module.exports = {
    getById: async function(req, res, next) {	
        await receiptlineitemModel.findById(req.params.receiptlineitemId, async function(err, receiptlineitem){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=receiptlineitem;
                res.status(200).json({msg: "receiptlineitem found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        receiptlineitemModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, receiptlineitem){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: receiptlineitem});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        receiptlineitemModel.find({}, function(err, receiptlineitem){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: receiptlineitem});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let receipt = await receiptModel.findById(req.body.intReceiptID);
        if(receipt===null){
            res.status(400).json({ msg: "This receipt can not be avaiable.", data: null});
            return;
        }
        let receiptlineitem={};
        if (req.body.intStockID !== undefined)
            receiptlineitem.intStockID=req.body.intStockID;
        if (req.body.qtyQuantityReceived !== undefined)
            receiptlineitem.qtyQuantityReceived=req.body.qtyQuantityReceived;
        if (req.body.qtyQuantityOrdered !== undefined)
            receiptlineitem.qtyQuantityOrdered=req.body.qtyQuantityOrdered;
        if (req.body.intAssetID !== undefined)
            receiptlineitem.intAssetID=req.body.intAssetID;
        if (req.body.intReceiptID !== undefined)
            receiptlineitem.intReceiptID=req.body.intReceiptID;
        if (req.body.strDescription !== undefined)
            receiptlineitem.strDescription=req.body.strDescription;
        if (req.body.intParentReceiptLineItemID !== undefined)
            receiptlineitem.intParentReceiptLineItemID=req.body.intParentReceiptLineItemID;
        if (req.body.dtmDateExpiryOfInventoryItems !== undefined)
            receiptlineitem.dtmDateExpiryOfInventoryItems=req.body.dtmDateExpiryOfInventoryItems;
        if (req.body.dblPurchasePricePerUnit !== undefined)
            receiptlineitem.dblPurchasePricePerUnit=req.body.dblPurchasePricePerUnit;
        if (req.body.intReceiveToStockID !== undefined)
            receiptlineitem.intReceiveToStockID=req.body.intReceiveToStockID;
        if (req.body.intReceiveToFacilityID !== undefined)
            receiptlineitem.intReceiveToFacilityID=req.body.intReceiveToFacilityID;
        if (req.body.intUpdated !== undefined)
            receiptlineitem.intUpdated=req.body.intUpdated;
        
        receiptlineitemModel.findByIdAndUpdate(req.params.receiptlineitemId, receiptlineitem, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });       
    },

    deleteById: async function(req, res, next) {
        receiptlineitemModel.findByIdAndRemove(req.params.receiptlineitemId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let receipt = await receiptModel.findById(req.body.intReceiptID);
        if(receipt===null){
            res.status(400).json({ msg: "This receipt can not be avaiable.", data: null});
            return;
        }
        let receiptlineitem={};
        if (req.body.intStockID !== undefined)
            receiptlineitem.intStockID=req.body.intStockID;
        if (req.body.qtyQuantityReceived !== undefined)
            receiptlineitem.qtyQuantityReceived=req.body.qtyQuantityReceived;
        if (req.body.qtyQuantityOrdered !== undefined)
            receiptlineitem.qtyQuantityOrdered=req.body.qtyQuantityOrdered;
        if (req.body.intAssetID !== undefined)
            receiptlineitem.intAssetID=req.body.intAssetID;
        if (req.body.intReceiptID !== undefined)
            receiptlineitem.intReceiptID=req.body.intReceiptID;
        if (req.body.strDescription !== undefined)
            receiptlineitem.strDescription=req.body.strDescription;
        if (req.body.intParentReceiptLineItemID !== undefined)
            receiptlineitem.intParentReceiptLineItemID=req.body.intParentReceiptLineItemID;
        if (req.body.dtmDateExpiryOfInventoryItems !== undefined)
            receiptlineitem.dtmDateExpiryOfInventoryItems=req.body.dtmDateExpiryOfInventoryItems;
        if (req.body.dblPurchasePricePerUnit !== undefined)
            receiptlineitem.dblPurchasePricePerUnit=req.body.dblPurchasePricePerUnit;
        if (req.body.intReceiveToStockID !== undefined)
            receiptlineitem.intReceiveToStockID=req.body.intReceiveToStockID;
        if (req.body.intReceiveToFacilityID !== undefined)
            receiptlineitem.intReceiveToFacilityID=req.body.intReceiveToFacilityID;
        if (req.body.intUpdated !== undefined)
            receiptlineitem.intUpdated=req.body.intUpdated;
        
        receiptlineitemModel.create(receiptlineitem, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intAssetID) {
                        res.status(400).json({ msg: err.errors.intAssetID.message });
                        return;
                    }
                }
                res.status(400).json({ msg: "Creat failed", data: null});
            }				  
            else
                res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
		});
    }
    
}					