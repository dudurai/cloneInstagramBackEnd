const express = require('express');
const mongoose = require('mongoose');
const mongooseKey = require('../credentials/universal_key.json').key;
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect(`mongodb+srv://eduardo:${mongooseKey}@cluster0-b9grj.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);

