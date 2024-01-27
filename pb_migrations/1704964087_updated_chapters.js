/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmnjx01u",
    "name": "course",
    "type": "relation",
    "required": true,
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmnjx01u",
    "name": "course",
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
