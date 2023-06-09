const express = require('express')
const router = express.Router();
const connection = require('../db')
const errorHandler = require('./handlers').errorHandler
const dataHandler = require('./handlers').dataHandler

router.post('/reordercollection/:collectionid', (req, res) => {

  let c_id = req.params.collectionid
  let collectionAlbumID = req.body.collectionAlbumID;
  let albumNumEnd = req.body.albumNumEnd;
  let userID = req.body.userID;

  let checkUserSql = `SELECT user_id FROM collection WHERE collection_id=?;`

  let updateSql = `
  UPDATE collection_album SET album_num = ? WHERE collection_album.collection_album_id = ?
  `

  connection.query(checkUserSql, [c_id], (err, response) => {
    if (err) return res.json(errorHandler("Database connection error", err));

    if (response[0].user_id != userID) return res.json(errorHandler("Wrong user"));

    connection.query(updateSql, [albumNumEnd, collectionAlbumID], (err, response) => {
      if (err) return res.json(errorHandler("Database connection error", err));

      if (response.changedRows === 0) return res.json(errorHandler("No rows changed", response.message));

      let updateLastEditDateSql = `UPDATE collection SET collection_last_edit_date = ? WHERE collection_id = ?;`
      let currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

      connection.query(updateLastEditDateSql, [currentDateTime, c_id], (err, response) => {
        if (err) return res.json(errorHandler("Database connection error", err));
        res.json(dataHandler("Album numbers successfully changed"))
      })
    })
  })
})

module.exports = router;