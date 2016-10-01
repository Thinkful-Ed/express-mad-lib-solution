'use strict';

// Solution to Drill 1
// ===================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// const doMadLib = (libTemplate, ani) => {};

const doMadlib = (params) => {
  const {adjective1, adjective2, adjective3, adverb, name, pronoun, noun, place} = params;
  return (
  `There's a ${adjective1} new ${name} in ${place} and ${pronoun} has everybody` +
  `talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it.` + 
  `However, ${name} has a secret - ${name}'s a vile vampire. \n` + 
  `Will it end with a bite, or with a stake through the ${noun}?`);
};

// GET requests to the root of the server
app.get('/', (req, res) => {
  res.send(doMadlib(req.query)).end()
});


// listen for requests :)
app.listen(process.env.PORT, () => console.log(`Your app is listening on port ${process.env.PORT}`));
