
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  name: String,
  description: String,
  price: Number,
  category: String,
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);
