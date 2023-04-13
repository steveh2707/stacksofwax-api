const express = require('express')
const app = express();
const connection = require('./db')

// import routes
const loginRoute = require('./routes/loginRoute')

const collectionsAllRoute = require('./routes/collectionsAllRoute')
const collectionsUserRoute = require('./routes/collectionsUserRoute')
const collectionRoute = require('./routes/collectionRoute')
const collectionAddRoute = require('./routes/collectionAddRoute')
const collectionReorderRoute = require('./routes/collectionReorderRoute')
const commentAddRoute = require('./routes/commentAddRoute')

const albumsAllRoute = require('./routes/albumsAllRoute')
const albumRoute = require('./routes/albumRoute')
const albumAddToCollectionRoute = require('./routes/albumAddToCollectionRoute')
const artistsAllRoute = require('./routes/artistsAllRoute')


app.use(express.urlencoded({ extended: true }));

app.use(loginRoute)

app.use(collectionsAllRoute)
app.use(collectionsUserRoute)
app.use(collectionRoute)
app.use(collectionAddRoute)
app.use(collectionReorderRoute)
app.use(commentAddRoute)

app.use(albumsAllRoute)
app.use(albumRoute)
app.use(albumAddToCollectionRoute)
app.use(artistsAllRoute)

app.listen((process.env.port || 4000), () => {
  console.log("API listening on port: 4000")
})