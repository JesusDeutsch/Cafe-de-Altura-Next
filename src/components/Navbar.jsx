"use client"
import React, { useContext, useState } from "react";
import { Phone } from "lucide-react";
import Buttons from "./Buttons";
import Image from "next/image";
import Link from "next/link";
import hotCoffee from "../../public/home-page/navbar/ps_coffee-hot.png";
import shoppingBag from "../../public/home-page/navbar/Carr.png";
import ShoppingCart from "./ShoppingCart";
import { DataContext } from "../app/contexts/DataContext";



const Navbar = () => {

  const {cart} =useContext(DataContext);

  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };
  


  return (
    <div className="flex justify-around items-center fixed w-full bg-[#2b2a2b] text-[#FFFFFF] h-16">
      <div className="flex items-center justify-center gap-[7px] w-[214px] h-[36px]">
        <Link href="/">
          <p className="flex items-center w-[186px] h-[36px] opacity-[86%] text-[24px] leading-[35px] font-normal gap-2">
            {"cafedealtura.com "}
            
            <Image src={hotCoffee} alt="coffe" width={21} height={25} />{" "}
          </p>
        </Link>
      </div>

      <ul className="items-center justify-center flex min-w-[512px] h-8 gap-4 list-none">
        <li className="flex justify-center items-center h-8 px-2 rounded-[10px] hover:bg-[#f7f5f31a] cursor-pointer bg-[32px]">
          <Link href="/shop">Tienda</Link>{" "}
        </li>
        <li className="flex justify-center items-center h-8 px-2 rounded-[10px] hover:bg-[#f7f5f31a] cursor-pointer bg-[32px]">
          <Link href="/subscription">Suscripción</Link>
        </li>
        <li className="flex justify-center items-center h-8 px-2 rounded-[10px] hover:bg-[#f7f5f31a] cursor-pointer bg-[32px]">
          <Link href="/Para-empresas">Para empresas</Link>
        </li>
        <li className="flex justify-center items-center h-8 px-2 rounded-[10px] hover:bg-[#f7f5f31a] cursor-pointer bg-[32px]">
          <Link href="/about-us">Sobre nosotros</Link>
        </li>
        <li className="flex justify-center items-center h-8 px-2 rounded-[10px] hover:bg-[#f7f5f31a] cursor-pointer bg-[32px]">
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>

      <div className="flex items-center  w-[388px] h-[40px] gap-[24px]">
        <div className="flex items-center gap-2">
          <Phone size={24} />

          <p className="flex  text-[14px] leading-[16px] font-semibold ">
            +34 919 49 05 18{" "}
          </p>
        </div>

        <div className="">
          <Buttons textButton={"Iniciar sesión"} />
        </div>
      </div>

      <div
          className={`absolute min-w-[35vh] min-h-[100vh] top-[64px] right-0 bg-white text-black p-4 rounded border-[2px] transition-all duration-500 ease-in-out ${isVisible ? ' ' : 'hidden'}`}>

          <ShoppingCart/>

        </div>
        <div className="relative items-center justify-center gap-1">
        <Image src={shoppingBag} alt="Shopping Cart" width={24} height={24} className="cursor-pointer" onClick={toggleDiv}/>
        <div>
        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 bg-red-500 rounded-full h-2 w-2 flex items-center justify-center text-xs">
            {cart.quantity}
          </div>
        )}
        </div>
      
          
        </div>      
    </div>
  );
};

export default Navbar;








