/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj4xwpmaupgkwxa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8dicgut",
    "name": "courses",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "048bdy2xs5fuhia",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj4xwpmaupgkwxa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8dicgut",
    "name": "field1",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "048bdy2xs5fuhia",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
