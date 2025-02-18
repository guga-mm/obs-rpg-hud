/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2150159679")

  // update collection data
  unmarshal({
    "name": "hud"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2150159679")

  // update collection data
  unmarshal({
    "name": "backgrounds"
  }, collection)

  return app.save(collection)
})
