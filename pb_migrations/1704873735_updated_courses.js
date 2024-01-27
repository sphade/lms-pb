/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // remove
  collection.schema.removeField("eobydyaq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("048bdy2xs5fuhia")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eobydyaq",
    "name": "attachments",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "o4uc26v588pdgyw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
