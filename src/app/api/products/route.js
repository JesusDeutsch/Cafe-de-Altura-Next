import { NextResponse } from 'next/server';
import clientPromise from 'lib/mongodb';
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