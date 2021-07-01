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
  next()
})
app.use(express.urlencoded({ extended: true }))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Welcome to the Mongoose Store')
})

/*Index*/
app.get('/products', (req, res) => {
  Products.find({}, (err, createdVinyls) =>{
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else {
      res.render('Index', {
        products: createdVinyls
      })
    }
  })
})
/*New*/
app.get('/products/new', (req, res) => {
  res.render('New')
})
/*Delete*/
/*Update*/
/*Create*/
app.post('/products', (req, res) => {
  if(req.body.vinylIsMint === 'on'){
    req.body.vinylIsMint = true;
    req.body.vinylIsGood = false;
    req.body.vinylIsPoor = false;
  }else if(req.body.vinylIsGood ==='on'){
    req.body.vinylIsGood = true;
    req.body.vinylIsMint = false;
    req.body.vinylIsPoor = false;
  }else if(req.body.vinylIsPoor ==='on'){
    req.body.vinylIsPoor = true;
    req.body.vinylIsMint = false;
    req.body.vinylIsGood = false;
  }
  Products.create(req.body, (err, createdVinyls) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    }else{
      console.log(createdVinyls);
      res.redirect('/products')
    }
  })
})
/*Edit*/
/*Show*/

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
