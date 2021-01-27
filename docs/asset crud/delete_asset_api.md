# Delete Asset Api

Delete the Asset by Id

**URL** : `/api/assets/:assetid`

**Method** : `DELETE`

**Auth required** : `YES`

**Header** : `Authorization:{jwt-token}`

**URL Parameters** :  An integer that uniquely identifies the asset.

## Success Response
**Code** : `200 success`

**Resonse example**

```json
{
    "msg": "Asset deleted successfully!",
    data: null
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

**Condition** : If there was no asset available to delete.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "msg": "Delete failed",
    "data":null
}
```
