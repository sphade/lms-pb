/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  collection.viewRule = ""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\" && @request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfc8n0prtbxux3y")

  collection.viewRule = null
  collection.createRule = ""
  collection.updateRule = null

  return dao.saveCollection(collection)
})
