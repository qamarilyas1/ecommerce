import { strict } from 'assert';
import mongoose from 'mongoose'
const { Schema } = mongoose;



//schema
const productSchema = new Schema({
  "title": String,
      "description": String,
      "category": String,
      "price": Number,
      "discountPercentage": Number,
      "rating": Number,
      "brand": String,
      "tags": [String],
      "images": [String],
      "thumbnail": String

});

//model

const Product = mongoose.model('Product', productSchema);
export{Product}