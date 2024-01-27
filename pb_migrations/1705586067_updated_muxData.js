/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7dtzzpawo62j1r3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srdvokkh",
    "name": "chapterId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "u9j5wlu93o00uje",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7dtzzpawo62j1r3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srdvokkh",
    "name": "chapterId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "u9j5wlu93o00uje",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
