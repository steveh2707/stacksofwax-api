const express = require('express')
const app = express();
const connection = require('./db')

// import routes
const loginRegisterRoute = require('./routes/loginRegisterRoute')

const collectionsAllRoute = require('./routes/collectionsAllRoute')
const collectionsUserRoute = require('./routes/collectionsUserRoute')
const collectionRoute = require('./routes/collectionRoute')
const collectionAddRoute = require('./routes/collectionAddRoute')
const collectionAddAlbumRoute = require('./routes/collectionAddAlbumRoute')
const collectionReorderRoute = require('./routes/collectionReorderRoute')
const collectionDeleteRoute = require('./routes/collectionDeleteRoute')
const collectionDelteAlbumRoute = require('./routes/collectionDeleteAlbumRoute')
const commentAddRoute = require('./routes/commentAddRoute')

const albumsAllRoute = require('./routes/albumsAllRoute')
const albumRoute = require('./routes/albumRoute')
const artistsAllRoute = require('./routes/artistsAllRoute')
const artistRoute = require('./routes/artistRoute')

const searchRoute = require('./routes/searchRoute')


app.use(express.urlencoded({ extended: true }));

app.use(loginRegisterRoute)

app.use(collectionsAllRoute)
app.use(collectionsUserRoute)
app.use(collectionRoute)
app.use(collectionAddRoute)
app.use(collectionAddAlbumRoute)
app.use(collectionReorderRoute)
app.use(collectionDeleteRoute)
app.use(collectionDelteAlbumRoute)
app.use(commentAddRoute)

app.use(albumsAllRoute)
app.use(albumRoute)
app.use(artistsAllRoute)
app.use(artistRoute)

app.use(searchRoute)

app.listen((process.env.port || 4000), () => {
  console.log("API listening on port: 4000")
})