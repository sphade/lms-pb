/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4uc26v588pdgyw")

  // remove
  collection.schema.removeField("594jkdsu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "54kb4dmf",
    "name": "url",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4uc26v588pdgyw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "594jkdsu",
    "name": "url",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("54kb4dmf")

  return dao.saveCollection(collection)
})
