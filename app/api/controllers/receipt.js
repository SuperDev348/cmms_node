
const receiptModel = require('../models/receipt');
const receiptStatusModel = require('../models/receiptstatus');
module.exports = {
    getById: async function(req, res, next) {	
        await receiptModel.findById(req.params.receiptId, async function(err, receipt){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=receipt;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        receiptModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, receipts){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: receipts});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        receiptModel.find({}, function(err, receipts){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: receipts});							
            }
        });
    },

    updateById:async function(req, res, next) {
        // let receiptstatus = await receiptStatusModel.findById(req.body.intReceiptStatusID);
        // if(receiptstatus===null){
        //     res.status(400).json({ msg: "This receiptstatus can not be avaiable.", data: null});
        //     return;
        // }
        let receipt={};
        if (req.body.intSiteID !== undefined)
            receipt.intSiteID=req.body.intSiteID;
        if (req.body.dtmDateReceived !== undefined)
            receipt.dtmDateReceived=req.body.dtmDateReceived;
        if (req.body.dtmDateOrdered !== undefined)
            receipt.dtmDateOrdered=req.body.dtmDateOrdered;
        if (req.body.intReceiptStatusID !== undefined)
            receipt.intReceiptStatusID=req.body.intReceiptStatusID;
        if (req.body.intPurchaseCurrencyID !== undefined)
            receipt.intPurchaseCurrencyID=req.body.intPurchaseCurrencyID;
        if (req.body.intUserDestinationID !== undefined)
            receipt.intUserDestinationID=req.body.intUserDestinationID;
        if (req.body.intPurchaseOrderID !== undefined)
            receipt.intPurchaseOrderID=req.body.intPurchaseOrderID;
        if (req.body.intCode !== undefined)
            receipt.intCode=req.body.intCode;
        if (req.body.intSupplierID !== undefined)
            receipt.intSupplierID=req.body.intSupplierID;
        if (req.body.intUpdated !== undefined)
            receipt.intUpdated=req.body.intUpdated;
        if (req.body.strPackingSlip !== undefined)
            receipt.strPackingSlip=req.body.strPackingSlip;       
        
        receiptModel.findByIdAndUpdate(req.params.receiptId, receipt, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });   
    },

    deleteById: async function(req, res, next) {
        receiptModel.findByIdAndRemove(req.params.receiptId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let receiptstatus = await receiptStatusModel.findById(req.body.intReceiptStatusID);
        if(receiptstatus===null){
            res.status(400).json({ msg: "This receiptstatus can not be avaiable.", data: null});
            return;
        }
        let receipt={};
        if (req.body.intSiteID !== undefined)
            receipt.intSiteID=req.body.intSiteID;
        if (req.body.dtmDateReceived !== undefined)
            receipt.dtmDateReceived=req.body.dtmDateReceived;
        if (req.body.dtmDateOrdered !== undefined)
            receipt.dtmDateOrdered=req.body.dtmDateOrdered;
        if (req.body.intReceiptStatusID !== undefined)
            receipt.intReceiptStatusID=req.body.intReceiptStatusID;
        if (req.body.intPurchaseCurrencyID !== undefined)
            receipt.intPurchaseCurrencyID=req.body.intPurchaseCurrencyID;
        if (req.body.intUserDestinationID !== undefined)
            receipt.intUserDestinationID=req.body.intUserDestinationID;
        if (req.body.intPurchaseOrderID !== undefined)
            receipt.intPurchaseOrderID=req.body.intPurchaseOrderID;
        if (req.body.intCode !== undefined)
            receipt.intCode=req.body.intCode;
        if (req.body.intSupplierID !== undefined)
            receipt.intSupplierID=req.body.intSupplierID;
        if (req.body.intUpdated !== undefined)
            receipt.intUpdated=req.body.intUpdated;
        if (req.body.strPackingSlip !== undefined)
            receipt.strPackingSlip=req.body.strPackingSlip;
        
        receiptModel.create(receipt, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intSiteID) {
                        res.status(400).json({ msg: err.errors.intSiteID.message });
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