# API Endpoint Template

**Backend API** 
**Description**:this is the backend of the website and allows for communication with the databases  
**Extra-information**: if anything more specific is wanted for testing the backend all data can be found in test databases files within the backend folder and then inside the database folder

## Backend API Endpoint

This example shows a `POST` endpoint for logging into the system.  
**Endpoint**: POST /api/users  
**Description**: logs user into account.

**Request Body**:

```json
{
  "username": "AAAA11", 
  "password": "password1" 
}
```

***Response***:

-returns active user as username if correct

This example shows a `POST` endpoint for a user searching a specific item.  
**Endpoint**: POST /api/users  
**Description**: user searches an item and item is returned.

**Request Body**:

```json
{
  "item": "244"
}
```

***Response***:

-returns items descriptors if avaliable

This example shows a `POST` endpoint for signing up to the system.  
**Endpoint**: POST /api/users  
**Description**: an account is created for a user

**Request Body**:

```json
{
  "username": "AAAA11", 
  "password": "password1"
  "Forename": "Pork"
  "Surname": "John"
  "phoneNumber": "0800 118 118"
  "Age": "21"
  "postcode": "SY23 3QH "


}
```

***Response***:

-creates an account with relevant information
