require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const Products = require('./models/products');
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) => {
  next()
})
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.redirect('/products')
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
app.delete('/products/:id', (req, res)=>{
    Products.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/products');//redirect back to fruits index
    });
});
/*Update*/
app.put('/products/:id', (req, res)=>{
  console.log(req.body)
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
  Products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProduct)=>{
      res.redirect('/products');
  });
});

app.get('/products/:id/buy', (req, res)=>{
  Products.findByIdAndUpdate(req.params.id, { $inc: {qty: -1 } }, {new:true}, (err, updatedProduct)=>{
      res.redirect('/products');
  });
});
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
app.get('/products/:id/edit', (req, res) => {
  Products.findById(req.params.id, (err, editedProduct) => {
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Edit', {
        products: editedProduct
      })
    }
  })
})
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
