import Image from 'next/image'
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const ListCoffees = () => {


    const { items, error, addToCart } = useContext(DataContext);

    if (error) {
      return <div>Error: {error}</div>;
    }
  
    const handleAddToCart = (item) => {
      addToCart(item);
    };
    console.log(items);
    
  return (
    <div>
    <div className="flex flex-col items-center justify-center pt-[104px] pb-10 gap-6">
      <div className="w-[179px] h-[28px] font-medium text-2xl leading-7 text-[#2a5b45]">
        <div className="flex"></div>
        <h2>Últimos orígenes</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            className={`group flex flex-col items-center justify-center w-[282px] h-[391.39px] border gap-6 rounded-lg border-[solid] hover:bg-[#f7f5f3] ${
              !item.available ? "opacity-40 -z-10" : ""
            }`}
            key={item._id}
          >
            <Image
              src={item.img_url}
              alt="coffe"
              width={219.39}
              height={219.39}
            />
            <div className="flex justify-center flex-col items-center gap-3">
              <h3 className="font-semibold text-sm">{item.brand}</h3>
              <p className="text-sm font-normal">
                {item.price["$numberDecimal"]}€
              </p>
            </div>

            <div
              className={`flex justify-center items-center w-[60px] h-8 rounded gap-2 ${
                item.available
                  ? "bg-[#2a5b45b2] group-hover:bg-[#2a5b45]"
                  : "bg-gray-400"
              }`}
              onClick={() => item.available && handleAddToCart(item)}
            >
              <span
                className={`text-sm font-semibold leading-4 text-[white] no-underline cursor-pointer ${
                  !item.available ? "w-auto" : "w-11"
                }`}
              >
                {item.available ? "Añadir" : "Agotado"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ListCoffees