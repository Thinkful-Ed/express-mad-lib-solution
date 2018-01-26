'use strict';

// Solution to Mad Libs drill 
// ==========================

//import express
const express = require('express');

//init a new express app
const app = express();

const doMadlib = (params) => {
  // we use destructuring to get the values for adjective1, adjective2, etc.
  // from the request params
  const {adjective1, adjective2, adjective3, adverb, name, noun, place} = params;
  // then we return a string that substitutes in these values
  return (
  `There's a ${adjective1} new ${name} in ${place} and everyone's ` +
  `talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. ` + 
  `However, ${name} has a secret - ${name}'s a vile vampire.<br><br>` + 
  `Will it end with a bite, or with a stake through the ${noun}?`);
};

// GET requests to the root of the server
// Pass the request query as params for doMadlib
app.get('/', (req, res) => res.send(doMadlib(req.query)));


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
