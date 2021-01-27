# Create Asset Api

Update the Asset by Id

**URL** : `/api/assets/:uid`

**Method** : `PUT`

**Auth required** : `YES`

**Header** : `Authorization:{jwt-token}`

**URL Parameters** :  An integer that uniquely identifies the asset.
| Param       | Type     | Description     | 
| :------------- |  :----------- |----------- |
|  strName |  String    | Display name of the asset.|
|  strDescription |  String    | A short text describing the asset.|
|  strMake | String    | For equipment or tools, this field can be used to store the brand's name of the asset.|
|  strMake |  String    | For equipment or tools, this field can be used to store the brand's name of the asset.|
|  strModel |  String    | For equipment or tools, this field can be used to store the model's name of the asset.|
|  qtyMinStockCount |integer    | Mininum stock count for the asset.|
|  strCity |String    | The city the asset is located into.|
|  strShippingTerms |String    | This field can be used to add comments about the shipping terms of the asset. For example : `"Item is heavier than 20kg and must be delivered before 10AM."`|
|  strAddress |String    | Street number and street name of the address the asset is located at.|
|  strNotes |String    | This field can be used to store additional details about the asset like the name of its supplier, a voltage range or dimensions for example.|
|  strProvince |String    | Code or full name of the province the asset is located at.|
|  intCountryID |integer    | The ID of the country the asset is located at. For example : `124` for Canada or `840` for United States of America. For getting all possible values, please refer to the Country section.|
|  strInventoryCode |String    | This field can be used to store an inventory code for the asset.|
|  qtyStockCount |Integer    | Indicates the current stock count for the asset.|
|  intSiteID |Integer    | For multi-sites tenants, the ID of the site where the asset is located at. |
|  strRow |String    |The row where the asset is located at in a facility. |
|  strMASourceProduct |string    |A JSON formatted string giving details about an asset coming from MA Source.|
|  strAisle |string    |The aisle where the asset is located at in a facility.|
|  strBinNumber |string    |The number of the bin where the asset is stored.|
|  intCategoryID |Integer    |The ID of the category the asset is directly attached to.|
|  strPostalCode |string    |The postal code of the address the asset is located at.|
|  strSerialNumber |string    |This field can be used to store the serial number of the asset.|
|  strCode |string    |This field can be used to define a code associated with the asset.|
|  dblLatitude |Double    |The latitude of the geographic location of the asset.|
|  dblLongitude |Double    |The longitude of the geographic location of the asset.|
|  strUnspcCode |String    |This field can be used to store the United Nations Standard Products and Services Code of the asset.|
|  dblLastPrice |Double    |Last Purchase Price Per Unit on Asset|
|  bolIsBillToFacility |Boolean    |If set to true, indicates that invoices for assets (usually parts/supplies) should be sent to this facility.|
|  intAssetLocationID |Integer    |An integer uniquely defining the location of asset. Refers to Asset with an asset category as Locations And Facilities|
|  bolIsOnline |Boolean    |A boolean value representing if the related Asset is online or offline, 1 or 0 respectively.|
|  bolIsShippingOrReceivingFacility	 |Boolean    |A boolean that identifies whether a facility ships or receives assets (usually parts/supplies).|
|  strQuotingTerms	 |Boolean    |Quoting terms that are automatically added to RFQs where shipping is indicated for Asset type Facility.|
|  intAssetParentID	 |Integer    |An integer that uniquely identifies the parent of Asset.|
|  intAccountID	 |Integer    |An integer unitquely defining the Account.|
|  intChargeDepartmentID	 |Integer    |An integer uniquely defining the Charge Department|
|  intSuperCategorySysCode	 |Integer    |Asset Category SysCode for Region or a Site|
|  strBarcode	 |Integer    |For equipment or tools, this field can be used to store the bar code's value of the asset.|

**Data example** 

```json
{
    "strFullName": "strFullName of Asset",
    "strDescription": "Asset_Desc_Name",
    "strMake": "Asset_Make_Name",
    "strModel": "Asset_Model_Name",
    "qtyStockCount": 4
    ... ...
}
```
## Success Response
**Code** : `200 success`

**Resonse example**

```json
{
   "msg": "Asset updated successfully!"
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

**Condition** : If fields are missed or put the wrong type of value.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "msg": "update failed"
}
```
