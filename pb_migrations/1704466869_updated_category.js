/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj4xwpmaupgkwxa")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj4xwpmaupgkwxa")

  collection.name = "category"

  return dao.saveCollection(collection)
})
