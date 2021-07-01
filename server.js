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
// app.delete('/logs/:id', (req, res)=>{
//     Products.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.redirect('/logs');//redirect back to fruits index
//     });
// });
/*Update*/
/*Create*/
app.post('/products', (req, res) => {
  if(req.body.mintcondition === 'on'){
    req.body.mintcondition = true;
    req.body.goodcondition = false;
    req.body.poorcondition = false;
  }else if(req.body.goodcondition ==='on'){
    req.body.goodcondition = true;
    req.body.mintcondition = false;
    req.body.poorcondition = false;
  }else if(req.body.poorcondition ==='on'){
    req.body.poorcondition = true;
    req.body.mintcondition = false;
    req.body.goodcondition = false;
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
app.get('/products/:id', (req, res) => {
  Products.findById(req.params.id, (err, createdVinyls)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        products: createdVinyls
      })
    }
  })
})

app.listen(PORT, () => {
  console.log('Listening on PORT', PORT)
});
