const {Schema, model} = require('mongoose');

const logsSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: Number, required: true},
  qty: {type: Number, required: true},
})

const Products = model('Products', logsSchema);

module.exports = Products;
