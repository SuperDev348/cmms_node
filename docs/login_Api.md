# Login Api

Used to collect a Token for a registered User.

**URL** : `/api/auth/login`

**Method** : `POST`

**Method**  `Content-Type:application/json`


| Param       | Required     | Type     | Description     | 
| :------------- | :----------: | -----------: |----------- |
|  email | yes   | String    | User's Email Address    |
|  password | yes   | String    | User's password    |

**Data example** All fields must be sent.

```json
{
    "email": "test@gmail.com"
    "password": "test!@3"
}
```

## Success Response

**Code** : `200 success`

**Resonse example**

```json
{
    "msg": "user found!",
    "data": {
        "user": {
            "id": "5f6212d8ed7daa16dcbf44ca",
            "strFullName": "test demo",
            "strEmailAddress": "test@gmail.com",
            "strTelephone": "345344890"
        },
        "token": "4hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNjIxMmQ4ZWQ3ZGFhMTZkY2JmNDRjYSIsImV4cGlyZWRBdCI6MTYwMzI4MzYzODgzMywiaWF0IjoxNjAwNjkxNjM4fQ.-hdmBoRgBHmb8hxiMF81izH1JlS41DSZlBZCZMSff1Y"
    }
}
```

## Error Responses

**Condition** : If User doen not exist.

**Code** : `404 Not Found`

**Resonse example**
```json
{
    "msg": "Invalid email/password!",
    "data": null
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "msg": "Bad Request!",
    "data": null
}
```

### Or

**Condition** : Internal Server Error.

**Code** : `500`

**Content example**

```json
{
    "msg": "Internal Server error",
}
```
