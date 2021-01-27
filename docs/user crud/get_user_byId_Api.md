# Get Single User By Id Api

Get a single User by id if current user was registered on it.

**URL** : `/api/users/:uid`

**Method** : `GET`

**Auth required** : `YES`

**Header** : `Authorization:{jwt-token}`

**URL Parameters** :  An integer that uniquely identifies the user.

## Success Response

**Code** : `200 success`

**Resonse example**


```json
{
    "msg": null,
    "data": {
        "user": {
            "_id": "5f6212d8ed7daa16dcbf44ca",
            "strFullName": "test demo",
            "password": "$2b$10$jIqho0m8oHKsXTNIk6xFcu0kSBme4zNieLyrm.cFDLYMCpVzRcKPq",
            "strEmailAddress": "test@gmail.com",
            "strTelephone": "strTelephone",
            "strTelephone2": "",
            "intUserStatusID": 1,
            "strUserTitle": "strUserTitle",
            "strPersonnelCode": "",
            "strUserName": "3",
            "strNotes": "strNotes",
            "strRequestNotes": "strRequste notes",
            "bolGroup": true,
            "bolApiManaged": true,
            "strPreferences": "6",
            "__v": 0
        }
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
   "msg": "User not found", 
   "data":null
}
```