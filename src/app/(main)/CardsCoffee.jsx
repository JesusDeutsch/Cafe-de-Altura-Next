"use client";
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

const CardsCoffee = () => {

    const { items, error } = useContext(DataContext);

  if (error) {
    return <div>Error: {error}</div>;
  }


return (
<div className="w-full h-[603.39px] flex flex-col items-center justify-center gap-10">
        <div className="w-[120px] h-7 font-medium text-2xl leading-7 text-[#2a5b45]">
          <h2>Novedades</h2>
        </div>
        <div className=" flex justify-center items-center w-full h-[391.39px] gap-6">
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
                  {item.price["$numberDecimal"]}€
                </p>
              </div>

              <div className="flex justify-center items-center w-[60px] h-8 rounded gap-2 bg-[#2a5b45b2]  group-hover:bg-[#2a5b45]">
                <a
                  href="#"
                  className="w-11 h-4 text-sm font-semibold leading-4 text-[white] no-underline "
                >
                  Añadir
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[101px] h-6">
          <Link href="/shop" className="flex w-full items-center gap-4">
            <p className="h-4 text-sm font-semibold leading-4 text-black underline">
              Ver todos
            </p>
            <MoveRight width={24} height={24} />
          </Link>
        </div>
      </div>  )
}

export default CardsCoffee