/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // remove
  collection.schema.removeField("ngi6qonx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj5k5dvp",
    "name": "field1",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "name",
        "age",
        "favoriteColor"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ngi6qonx",
    "name": "field",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("gj5k5dvp")

  return dao.saveCollection(collection)
})
