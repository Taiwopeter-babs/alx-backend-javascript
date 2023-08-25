const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+$)', (req, res) => {
  const id = req.params.id;
  // const regexPattern = /^[0-9]+$/;
  return res.status(200).send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const respObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  return res.status(200).json(respObj);
});

app.post('/login', (req, res) => {
  const username = req.body.username;

  return res.status(200).send(`Welcome ${username}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});
