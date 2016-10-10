'use strict';

// Solution to Mad Libs drill 
// ==========================

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const doMadlib = (params) => {
  const {adjective1, adjective2, adjective3, adverb, name, pronoun, noun, place} = params;
  return (
  `There's a ${adjective1} new ${name} in ${place} and ${pronoun} has everybody` +
  `talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it.` + 
  `However, ${name} has a secret - ${name}'s a vile vampire. \n` + 
  `Will it end with a bite, or with a stake through the ${noun}?`);
};

// GET requests to the root of the server
app.get('/', (req, res) => res.send(doMadlib(req.query)));


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
