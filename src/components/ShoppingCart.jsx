"use client";
import React, { useContext } from "react";
import { DataContext } from "../app/contexts/DataContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShoppingCart = () => {
  const { cart, handleAddOne, handleRemoveOne, handleClearCart, getCartTotal } =
    useContext(DataContext);

  return (
    <div className="flex flex-col items-center w-full h-screen pt-8  gap-4 z-20">
      <h2 className="text-2xl font-semibold">Carrito de Compras</h2>
      
      {cart.length > 0 ? (
        <div className="w-full flex flex-col gap-4 overflow-auto  pb-20">
          {cart.map((item, index) => (
            <div
              key={index}
              className={`w-full flex justify-between items-center pb-2 ${index !== cart.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span>
                  <Image
                            src={item.img_url}
                            alt="coffe"
                            width={70}
                            height={70}
                        />

                  </span>
                  <div>
                  <h3 className="text-sm font-semibold">{item.brand}</h3>
                  <p className="text-sm font-normal">
                    {(item.price["$numberDecimal"])}€
                  </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemoveOne(item._id)}
                  className="size-10 text-[25px] text-black px-2 py-1 rounded"
                >
                  <Minus />
                </button>

                <p className="flex items-center justify-center  text-xl rounded-full px-2 py-1 font-normal size-[24px] bg-[#2A5B451A]">
                  {item.quantity}
                </p>

                <button
                  onClick={() => handleAddOne(item._id)}
                  className="size-10 text-[25px] text-black px-2 py-1 "
                >
                  <Plus />
                </button>
              </div>
            </div>
          ))}
          <div className="flex gap-4 items-center justify-center">

          <button
            onClick={handleClearCart}
            className=" bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Vaciar Carrito
          </button>

          <div className="flex items-center justify-center bg-[#2a5b45] text-white px-4 py-2 rounded mt-4">
            <Link href="/basket">

              Ir a Cesta
            </Link>
          </div>

          </div>

          <div className="relative mt-4 ">
            <p className="text-xl font-semibold">
              Total: {getCartTotal().toFixed(2)}€
            </p>
          </div>
        </div>
      ) : (
        <p className="text-lg">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default ShoppingCart;


