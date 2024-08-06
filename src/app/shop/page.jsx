"use client"
import React, { useEffect, useState } from "react";

const Shop = () => {

  const DataItems = () => {
    const [items, setItems] = useState([]);

    const getItems = async () => {
      try {
        const response = await fetch(
          "https://cafe-de-altura-next-c4v4.vercel.app/api/products",
          { mode: 'no-cors' }
        );
        const data = await response.json();
        setItems(data);
        console.log(data); 
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      getItems();
    }, []);

    return (
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li> 
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Shop</h1>
      <DataItems /> 
    </div>
  );
}

export default Shop;
