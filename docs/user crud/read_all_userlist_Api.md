# Read all user list Api

Get the all registered user list.

**URL** : `/api/users/userlist`

**Method** : `GET`

**Auth required** : `YES`

**Header**  : `Authorization:{jwt-token}`


## Success Response

**Code** : `200 success`

**Resonse example**


```json
{
    "msg": null,
    "data": [
        {
            "_id": "5f6212d8ed7daa16dcbf44ca",
            "strFullName": "test demo",
            "strEmailAddress": "pavel@gmail.com",
            "strTelephone": "3344",
            "strTelephone2": "1",
            "intUserStatusID": 1,
            "strUserTitle": "2",
            "strPersonnelCode": "",
            "strUserName": "3",
            "strNotes": "4",
            "strRequestNotes": "sdfddd",
            "bolGroup": true,
            "bolApiManaged": true,
            "strPreferences": "6",
            "__v": 0
        },
        {
            "_id": "5f68a89c247532232419483c",
            "strFullName": "ttest pavel",
            "strEmailAddress": "ttestt@gmail.com",
            "strTelephone": "3344",
            "strTelephone2": "",
            "intUserStatusID": 0,
            "strUserTitle": "",
            "strPersonnelCode": "",
            "strUserName": "",
            "strNotes": "",
            "strRequestNotes": "",
            "bolGroup": false,
            "bolApiManaged": false,
            "strPreferences": "",
            "__v": 0
        }
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
    "msg": "Internal Server error",
    "data":null
}
```