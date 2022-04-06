const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', function (req, res) {
  console.log('response :', res);
  Post.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
