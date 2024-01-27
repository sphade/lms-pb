/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // remove
  collection.schema.removeField("5pvg5yir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgkiafou",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pvg5yir",
    "name": "description",
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
  collection.schema.removeField("mgkiafou")

  return dao.saveCollection(collection)
})
