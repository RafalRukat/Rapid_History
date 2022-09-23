const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const gameRoutes = require('./routes/game-copy');

const app = express();
app.listen(3000, () => {
    console.log("Server is listening on port 3000, let's play a game!");
});
app.use(express.static(path.join(__dirname, 'public')));
gameRoutes(app);

//todo rozważyć, czy nie zrobić requestów i responsów z podstronami zamiast normalnych anchorów