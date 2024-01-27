/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  collection.createRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
})
