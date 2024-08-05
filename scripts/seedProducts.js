import dbConnect from '../lib/mongodb';
import Product from '../models/Product';

const products = [
  // Tu array de productos aquí
];

async function seedProducts() {
  await dbConnect();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Products seeded successfully');
  process.exit();
}

seedProducts();