/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3298390430")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "bool2058414169",
    "name": "visible",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3298390430")

  // remove field
  collection.fields.removeById("bool2058414169")

  return app.save(collection)
})
