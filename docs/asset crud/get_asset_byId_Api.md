# Get Single Asset By Id Api

Get a single Asset by id if current asset was registered on it.

**URL** : `/api/assets/:assetid`

**Method** : `GET`

**Auth required** : `YES`

**Header** : `Authorization:{jwt-token}`

**URL Parameters** :  An integer that uniquely identifies the asset.

## Success Response

**Code** : `200 success`

**Resonse example**


```json
{
    "msg": ""Asset found!",
    "data": 
        {
            "_id": "5f6896897b9884253cf6bdb6",
            "strName": "strName",
            "strDescription": "strDescription",
            "strMake": "strMake",
            "strModel": "strModel",
            "qtyMinStockCount": 23,
            "strCity": "strCity",
            "strShippingTerms": "strShippingTerms",
            "strAddress": "strAddress",
            "strNotes": "",
            "strProvince": "",
            "intCountryID": 45,
            "strInventoryCode": "",
            "qtyStockCount": 11,
            "intSiteID": 329,
            "strRow": "",
            "strMASourceProduct": "",
            "strAisle": "",
            "strBinNumber": "",
            "intCategoryID": 32,
            "strPostalCode": "",
            "strSerialNumber": "",
            "strCode": "",
            "dblLatitude": 0.114573,
            "dblLongitude": 4.2587,
            "strUnspcCode": "",
            "dblLastPrice": 4.5,
            "bolIsBillToFacility": false,
            "intAssetLocationID": 886,
            "bolIsOnline": false,
            "bolIsShippingOrReceivingFacility": false,
            "strQuotingTerms": "",
            "intAssetParentID": null,
            "intAccountID": null,
            "intChargeDepartmentID": null,
            "intSuperCategorySysCode": null,
            "strBarcode": "",
            "__v": 0
        }
}
```

## Error Responses

**Code** : `401 Unauthorized`

**Condition** : Missing or incorrect authentication credentials and expired one.

**Resonse example**

```json
{
    "msg": "JWT token varified failed!",
    "data":null
}
```

```json
{
    "msg": "JWT token expired!",
    "data":null
}
```

### Or

**Condition** : If user does not exist on server.

**Code** : `404 Not Found`

**Content example**

```json
{
   "msg": "Asset not found", 
   "data":null
}
```