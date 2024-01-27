/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bbjbtsvfgk8wl9e")

  collection.name = "purchase"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bbjbtsvfgk8wl9e")

  collection.name = "purchases"

  return dao.saveCollection(collection)
})
