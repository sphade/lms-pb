/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // update
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
        "{name:lawal",
        "age:20}",
        "{name:lawal",
        "age:20}"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // update
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
})
