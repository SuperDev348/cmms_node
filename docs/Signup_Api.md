# Sign Up Api

Create an user if user does not already exist. Each User can only have one Account.

**URL** : `/api/auth/register`

**Method** : `POST`

**Method**  `Content-Type:application/json`

| Param       | Required     | Type     | Description     | 
| :------------- | :----------: | -----------: |----------- |
|  strFullName | yes   | String    | The full name of the user    |
|  strTelephone | yes   | String    | User's  phone number.   |
|  strEmailAddress | yes   | String    | User's Email address    |
|  password | yes   | String    | User's password    |
|  passwordconfirm | yes   | String    | confirm password    |

**Data example** All fields must be sent.

```json
{
    "strFullName": "first last",
    "strTelephone": "5141257",
    "strEmailAddress": "test@gmai.com",
    "password": "test!@3",
    "passwordconfirm": "test!@3",
}
```
## Success Response
**Code** : `200 success`

**Resonse example**


```json
{
   "msg": "User added successfully!!!",
    "data": id: "5f68a89c247532232419483c"
    }
```
## Error Responses

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "msg": "Email is required"
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