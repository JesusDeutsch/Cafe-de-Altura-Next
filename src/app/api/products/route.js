import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tu_nombre_de_base_de_datos");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("tu_nombre_de_base_de_datos");
    const body = await request.json();
    const product = { ...body, _id: new ObjectId() };
    await db.collection("products").insertOne(product);
    return NextResponse.json(product);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Error al crear producto' }, { status: 500 });
  }
}


import { MongoClient } from 'mongodb';
import cors from 'micro-cors';

const corsHandler = cors({
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  origin: '*'  // Esto permite todas las origenes. Ajusta según tus necesidades.
});

const handler = async (req, res) => {
  // Tu lógica de manejo de la API aquí
  // Ejemplo:
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  // ... resto de tu código ...
};

export default corsHandler(handler);