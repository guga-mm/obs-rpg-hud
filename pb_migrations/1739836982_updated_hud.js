/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2150159679")

  // remove field
  collection.fields.removeById("file3309110367")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1716930793",
    "max": 0,
    "min": 0,
    "name": "color",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "url3309110367",
    "name": "image",
    "onlyDomains": [],
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2150159679")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/png",
      "image/vnd.mozilla.apng",
      "image/webp"
    ],
    "name": "image",
    "presentable": true,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [
      "402x646"
    ],
    "type": "file"
  }))

  // remove field
  collection.fields.removeById("text1716930793")

  // remove field
  collection.fields.removeById("url3309110367")

  return app.save(collection)
})
