const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+$)', (req, res) => {
  const id = req.params.id;
  // const regexPattern = /^[0-9]+$/;
  return res.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});
