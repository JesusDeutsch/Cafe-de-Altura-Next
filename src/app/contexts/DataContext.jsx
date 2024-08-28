"use client";
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [shippingOption, setShippingOption] = useState('standard');

  //------------- Fetch items
  const getItems = async () => {
    try {
      const response = await fetch("https://cafe-de-altura-next-six.vercel.app/api/products");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    }
  };

  //-------------- Carga de archivos al local

  const loadCartItems = () => {
    const storedItems = JSON.parse(localStorage.getItem('products')) || [];

    //------------ Manejo de la key quantity
    const normalizedItems = storedItems.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCart(normalizedItems);
  };

  useEffect(() => {
    getItems();
    loadCartItems();
  }, []);

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  //------------ Añadir productos al carrito
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item._id === product._id);

    if (existingItemIndex > -1) {
     
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  };

  //---------Sumar
  const handleAddOne = (itemId) => {
    const updatedCart = cart.map(item => 
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  };

  //----------- Restar
  const handleRemoveOne = (itemId) => {
    const updatedCart = cart.map(item => 
      item._id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  };

  //------------------- Vaciar Carrito
  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('products');
  };

  //------------- Precio Total
  const getCartTotal = () => {
    return cart.reduce((total, product) => total + (product.price["$numberDecimal"] * product.quantity), 0);
  };

    //--------- Nueva función para obtener el costo de envío
    const getShippingCost = () => {
      return shippingOption === 'express' ? 9.00 : 0.00;
    };
  
    //---------- Nueva función para obtener el total incluyendo el envío
    const getTotalWithShipping = () => {
      return getCartTotal() + getShippingCost();
    };
  
    //------------ Función para actualizar la opción de envío
    const updateShippingOption = (option) => {
      setShippingOption(option);
    };
    

    //---------------- Vacia el local storage

    const clearLocalStorage = () => {
      localStorage.clear();
      setCart([]); 
    };



    return (
      <DataContext.Provider value={{
        items,
        error,
        cart,
        addToCart,
        handleAddOne,
        handleRemoveOne,
        handleClearCart,
        getCartTotal,
        shippingOption,
        updateShippingOption,
        getShippingCost,
        getTotalWithShipping,
        getCartItemsCount,
        clearLocalStorage
      }}>
        {children}
      </DataContext.Provider>
    );
  }