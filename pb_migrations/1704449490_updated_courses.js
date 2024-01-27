/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6maffza",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ppz35wa2",
    "name": "isPublished",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // remove
  collection.schema.removeField("m6maffza")

  // remove
  collection.schema.removeField("ppz35wa2")

  return dao.saveCollection(collection)
})
