/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
