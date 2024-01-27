/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u9j5wlu93o00uje",
    "created": "2024-01-10 17:32:12.300Z",
    "updated": "2024-01-10 17:32:12.300Z",
    "name": "chapters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yazjd0e7",
        "name": "title",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("u9j5wlu93o00uje");

  return dao.deleteCollection(collection);
})
