"use client";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const ProductsTable = () => {
  const { cart, handleAddOne, handleRemoveOne, getCartTotal } =
    useContext(DataContext);

  

  return (
      <div className="flex flex-col  min-w-[792px]] h-auto p-2 gap-6">
        <h3 className="font-semibold w-[83px] h-[24px] leading-6 text-black">
          Productos
        </h3>

        <div className="flex flex-col gap-3 w-[776px]">
          {cart.map((item, index) => (
            <div
            key={index}
            className={`w-[776px] h-[56px] flex justify-between items-center pb-3 ${
              index !== cart.length - 1 ? 'border-b ' : ''
            }`}
          >
              <div className="flex gap-6">
                <div className="flex items-center w-[88px] h-[56px] gap-2">
                  <button
                    onClick={() => handleRemoveOne(item._id)}
                    className=" text-black  "
                  >
                    <Minus />
                  </button>

                  <p className="flex w-6 h-6 items-center justify-center rounded-full  bg-[#2A5B451A] text-[#2A5B45] font-normal leading-4	">
                    {item.quantity}
                  </p>

                  <button
                    onClick={() => handleAddOne(item._id)}
                    className=" text-black  "
                  >
                    <Plus width={24} height={24} />
                  </button>
                </div>

                <Image src={item.img_url} alt="coffe" width={56} height={56} />

                <div>
                  <h3 className="w-[147px] h-[16px] text-sm text-black font-semibold leading-4 size-[14px]">
                    {item.brand}
                  </h3>
                  <p className="w-[149px] h-[16px] text-sm leading-4 font-normal">
                    Paquete de café, 250 gr
                  </p>
                </div>
              </div>

              <div className="w-[54px] h-[24px] leading-6 size-[18px] font-semibold">
                {(item.price["$numberDecimal"] * item.quantity).toFixed(2)}€
              </div>
            </div>
          ))}
        </div>


      </div>
  );
};

export default ProductsTable;
