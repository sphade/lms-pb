/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqcbreps",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/svg+xml",
        "image/jpeg",
        "image/jxr",
        "image/avif",
        "image/x-gimp-gbr",
        "image/x-gimp-pat",
        "image/x-xcf",
        "image/vnd.radiance",
        "image/heif-sequence",
        "image/heif",
        "image/heic-sequence",
        "image/heic",
        "image/x-icns",
        "image/vnd.dwg",
        "image/bpg",
        "image/vnd.djvu",
        "image/x-icon",
        "image/bmp",
        "image/tiff",
        "image/webp",
        "image/jxs",
        "image/jpm",
        "image/jpx",
        "image/jp2",
        "image/jxl"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqcbreps",
    "name": "images",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/svg+xml",
        "image/jpeg",
        "image/jxr",
        "image/avif",
        "image/x-gimp-gbr",
        "image/x-gimp-pat",
        "image/x-xcf",
        "image/vnd.radiance",
        "image/heif-sequence",
        "image/heif",
        "image/heic-sequence",
        "image/heic",
        "image/x-icns",
        "image/vnd.dwg",
        "image/bpg",
        "image/vnd.djvu",
        "image/x-icon",
        "image/bmp",
        "image/tiff",
        "image/webp",
        "image/jxs",
        "image/jpm",
        "image/jpx",
        "image/jp2",
        "image/jxl"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
