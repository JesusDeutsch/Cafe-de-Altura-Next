import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const productSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  brand: String,
  price: Number,
  img_url: String,
  available: Boolean
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);