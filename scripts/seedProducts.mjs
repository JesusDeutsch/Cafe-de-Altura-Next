import clientPromise from '../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

const products = [
  {
    "_id": new ObjectId(),
    "brand": "Costa Rica Tarrazú",
    "price": 9.00,
    "img_url": "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_tarrazu_jejzcp.png",
    "available": true
  },
  // ... (añade el resto de los productos aquí)
];

async function seedProducts() {
  try {
    const client = await clientPromise;
    const db = client.db("tu_nombre_de_base_de_datos");
    await db.collection("products").insertMany(products);
    console.log("Productos insertados correctamente");
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
}

seedProducts();