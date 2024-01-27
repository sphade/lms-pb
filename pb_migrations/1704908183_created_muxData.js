/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7dtzzpawo62j1r3",
    "created": "2024-01-10 17:36:23.080Z",
    "updated": "2024-01-10 17:36:23.080Z",
    "name": "muxData",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vs7ttgqz",
        "name": "chapterId",
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
        "id": "oenx76if",
        "name": "assetId",
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
        "id": "4x8urvio",
        "name": "playbackId",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7dtzzpawo62j1r3");

  return dao.deleteCollection(collection);
})
