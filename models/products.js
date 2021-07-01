const {Schema, model} = require('mongoose');

const productsSchema = new Schema({
  artist: {type: String, required: true},
  album: {type: String, required: true},
  img: {type: String, required: false},
  price: {type: Number, required: true},
  qty: {type: Number, required: true},
  mintcondition: {type: Boolean, required: false},
  goodcondition: {type: Boolean, required: false},
  poorcondition: {type: Boolean, required: false},
})

const Products = model('Products', productsSchema);

module.exports = Products;
