# Read all asset list Api

Get the all registered asset list.

**URL** : `/api/assets`

**Method** : `GET`

**Auth required** : `YES`

**Header**  : `Authorization:{jwt-token}`


## Success Response

**Code** : `200 success`

**Resonse example**


```json
{
    "msg": "Asset list found!",
    "data": [
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
        },
        ...
    ]
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
**Condition** : Internal Server Error.

**Code** : `500`

**Resonse example**

```json
{
    "msg": "Internal Server error"
}
```