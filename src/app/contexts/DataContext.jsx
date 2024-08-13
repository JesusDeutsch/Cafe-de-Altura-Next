"use client"
import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const getItems = async () => {
    try {
      const response = await fetch(
        "https://cafe-de-altura-next-six.vercel.app/api/products"
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

  return (
    <DataContext.Provider value={{ items, error }}>
      {children}
    </DataContext.Provider>
  );
}