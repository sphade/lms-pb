/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soixvizv",
    "name": "position",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soixvizv",
    "name": "position",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
