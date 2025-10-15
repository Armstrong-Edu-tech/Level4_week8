const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    validate: {
      validator: function (value) {
        return value > 0; // Price must be positive
      },
      message: 'Price must be greater than 0'
    }
  }
});
const Product = mongoose.model('Product', productSchema);
const testProduct = new Product({ price: -50 }); // invalid price
testProduct.save()
  .then(() => console.log('Product saved successfully'))
  .catch(err => console.log('Validation Error:', err.message));
