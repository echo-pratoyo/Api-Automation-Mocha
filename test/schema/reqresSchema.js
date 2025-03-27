const schema_createUser = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "job": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "createdAt": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "job",
      "id",
      "createdAt"
    ]
  }


    
  
  export default schema_createUser
  
  