"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";

const CardsCoffee = () => {
  const { items, error, addToCart } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const SkeletonLoader = () => (
    <div className="flex justify-center items-center w-full h-[391.39px] gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-neutral-300 w-[282px] h-[391.39px] animate-pulse rounded-lg p-4 gap-4"
        >
          <div className="bg-neutral-400/50 w-full h-[219.39px] animate-pulse rounded-md"></div>
          <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-[603.39px] flex flex-col items-center justify-center gap-10">
      <div className="w-[120px] h-7 font-medium text-2xl leading-7 text-[#2a5b45]">
        <h2>Novedades</h2>
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="flex justify-center items-center w-full h-[391.39px] gap-6">
          {items.slice(0, 4).map((item) => (
            <div
              className="group flex flex-col items-center justify-center w-[282px] h-[391.39px] border gap-6 rounded-lg border-[solid] hover:bg-[#f7f5f3]"
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
                  {item.price["$numberDecimal"]} €
                </p>
              </div>

              <div
                className="flex justify-center items-center w-[60px] h-8 rounded gap-2 bg-[#2a5b45b2] group-hover:bg-[#2a5b45]"
                onClick={() => handleAddToCart(item)}
              >
                <span className="w-11 h-4 text-sm font-semibold leading-4 text-[white] no-underline cursor-pointer">
                  Añadir
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex w-[101px] h-6">
        <Link href="/shop" className="flex w-full items-center gap-4">
          <p className="h-4 text-sm font-semibold leading-4 text-black underline">
            Ver todos
          </p>
          <MoveRight width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default CardsCoffee;
