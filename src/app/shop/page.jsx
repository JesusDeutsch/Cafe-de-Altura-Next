"use client"
import React, { useEffect, useState } from "react";

const Shop = () => {
  const DataItems = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    const getItems = async () => {
      try {
        const response = await fetch(
          "https://cafe-de-altura-next-c4v4.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message);
      }
    };
    
    useEffect(() => {
      getItems();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li> 
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