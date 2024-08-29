"use client";

import React from "react";
import ProductsTable from "./ProductsTable";
import TotalShoppingCart from "./TotalShoppingCart";
import { useContext } from "react";
import { DataContext } from "@/app/contexts/DataContext";
import ShippingOptions from "./ShippingOptions";

const Basket = () => {
  const { getCartItemsCount } = useContext(DataContext);
  const itemsCount = getCartItemsCount();

  return (
    <div className=" flex flex-col w-full h-full items-center justify-center  p-10 gap-6">
      <h2 className=" w-[94px] h-[28px] text-[#2A5B45] leading-7 font-medium pt-[104px]">
        Cesta ({itemsCount})
      </h2>

      <div className="flex w-[1280px] max-h-[416px] gap-6 p-2 px-10">
        <div className="flex flex-col  justifc ">
          <ProductsTable />
          <ShippingOptions />
        </div>
        <TotalShoppingCart />
      </div>
    </div>
  );
};

export default Basket;
