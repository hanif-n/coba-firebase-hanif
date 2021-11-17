const functions = require("firebase-functions");
const express = require("express");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// const cors = require('cors');
const app = express();
// app.use(cors({ origin: true }));


app.get('*/hello/', (req, res) => {
  return res.status(200).send('Hello World!');
});

app.get('*/hello/:id', (req, res) => {
  var id = req.params.id;
  return res.status(200).send('Hello World! ' + id);
});
app.get('*/', (req, res) => {
  return res.status(200).send('Mau kemana bos?');
});

exports.app = functions.https.onRequest(app);