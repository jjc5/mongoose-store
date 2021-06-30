require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Products = require('./models/products');


/***Database setup***/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.once('connected', () => {
  console.log('connected to mongo')
})


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  console.log('I run before all routes')
  next()
})
app.use(express.urlencoded({ extended: true }))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
