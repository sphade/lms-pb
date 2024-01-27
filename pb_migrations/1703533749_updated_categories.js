/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvgv3a0dt1f4upz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tewlrp65",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvgv3a0dt1f4upz")

  // remove
  collection.schema.removeField("tewlrp65")

  return dao.saveCollection(collection)
})
