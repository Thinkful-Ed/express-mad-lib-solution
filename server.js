'use strict';

// Solution to Mad Libs drill 
// ==========================

// import express
const express = require('express');

// init a new express app
const app = express();
// use express middleware to parse the request body and add it to the request object
app.use(express.json());


function doMadlib(body) {
  // we use destructuring to get the values for adjective1, adjective2, etc.
  // from the request params
  const {adjective1, adjective2, adjective3, adverb, name, noun, place} = body;
  // then we return a string that substitutes in these values
  return (
  `There's a ${adjective1} new ${name} in ${place} and everyone's ` +
  `talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. ` + 
  `However, ${name} has a secret - ${name}'s a vile vampire. \n` + 
  `Will it end with a bite, or with a stake through the ${noun}?`);
}

// POST requests to the root of the server
// Pass params for doMadlib as JSON in the request body
app.post('/', (req, res) => res.send(doMadlib(req.body)));


// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
