/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nr90ka8vynn0tnf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nr90ka8vynn0tnf",
    "created": "2023-12-24 12:56:58.595Z",
    "updated": "2023-12-24 12:56:58.595Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l36uzrrk",
        "name": "field",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "acacasca",
            "afafawf",
            "efsefs"
          ]
        }
      },
      {
        "system": false,
        "id": "0krnwgow",
        "name": "field1",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "2s07luqm",
        "name": "field2",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
})
