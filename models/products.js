const {Schema, model} = require('mongoose');

const productsSchema = new Schema({
  artist: {type: String, required: true},
  album: {type: String, required: true},
  // img: {type: String, required: true},
  // price: {type: Number, required: true},
  // qty: {type: Number, required: true},
})

const Products = model('Products', productsSchema);

module.exports = Products;
