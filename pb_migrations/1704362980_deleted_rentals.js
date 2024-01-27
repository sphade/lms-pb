/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wfc8n0prtbxux3y",
    "created": "2023-12-25 07:37:13.743Z",
    "updated": "2023-12-30 11:57:26.071Z",
    "name": "rentals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nktxuw9h",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jrjwwwuu",
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
      },
      {
        "system": false,
        "id": "rsgxdbsc",
        "name": "dayPrice",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "t7bdpsgk",
        "name": "weekPrice",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "rd6qrwfw",
        "name": "monthPrice",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "girdvznv",
        "name": "itemValue",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "kotl00ma",
        "name": "quantity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
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
          "maxSelect": 4,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "5vur8w5t",
        "name": "category",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "fvgv3a0dt1f4upz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "m9gw1xyh",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
