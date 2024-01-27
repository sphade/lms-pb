/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hw5ocugf",
    "name": "videoUrl",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 1000000000000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hw5ocugf",
    "name": "videoUrl",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "video/mp4",
        "video/x-ms-wmv",
        "video/quicktime",
        "video/3gpp"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 10485760,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
