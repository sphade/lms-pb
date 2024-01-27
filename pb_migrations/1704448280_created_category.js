/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zj4xwpmaupgkwxa",
    "created": "2024-01-05 09:51:20.940Z",
    "updated": "2024-01-05 09:51:20.940Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rakl3qow",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("zj4xwpmaupgkwxa");

  return dao.deleteCollection(collection);
})
