const express = require('express');
const mongoose = require('mongoose');
const mongooseKey = require('../credentials/universal_key.json').key;
const app = express();

mongoose.connect(`mongodb+srv://eduardo:${mongooseKey}@cluster0-b9grj.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);

