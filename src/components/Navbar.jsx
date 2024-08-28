"use client"
import React, { useContext, useState } from "react";
import { Phone, X } from "lucide-react";
import Buttons from "./Buttons";
import Image from "next/image";
import Link from "next/link";
import hotCoffee from "../../public/home-page/navbar/ps_coffee-hot.png";
import shoppingBag from "../../public/home-page/navbar/Carr.png";
import ShoppingCart from "./ShoppingCart";
import { DataContext } from "../app/contexts/DataContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isCartAvailable = () => ['/', '/shop'].includes(pathname);

  const { cart, getCartItemsCount } = useContext(DataContext);

  const [isVisible, setIsVisible] = useState(false);

  const itemsCount = getCartItemsCount();

  const toggleDiv = () => {
    if (isCartAvailable()) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className="flex justify-around items-center fixed w-full bg-[#2b2a2b] text-[#FFFFFF] h-16">
      <div className="flex items-center justify-center gap-[7px] w-[214px] h-[36px]">
        <Link href="/">
          <p className="flex items-center w-[186px] h-[36px] opacity-[86%] text-[24px] leading-[35px] font-normal gap-2">
            {"cafedealtura.com "}
            <Image src={hotCoffee} alt="coffe" width={21} height={25} />
          </p>
        </Link>
      </div>

      <ul className="items-center justify-center flex min-w-[512px] h-8 gap-4 list-none">
      <li className={`flex justify-center items-center h-8 px-2 rounded-[10px] cursor-pointer ${['/shop', '/basket', '/checkOut', '/succes'].some(path => pathname.includes(path))  
            ? 'bg-[#515051] text-white' 
            : 'hover:bg-[#f7f5f31a]'
        }`}>
          <Link href="/shop">Tienda</Link>
        </li>
        <li className={`flex justify-center items-center h-8 px-2 rounded-[10px] cursor-pointer ${
          pathname === '/subscription' 
            ? 'bg-[#515051] text-white' 
            : 'hover:bg-[#f7f5f31a]'
        }`}>
          <Link href="/subscription">Suscripción</Link>
        </li>
        <li className={`flex justify-center items-center h-8 px-2 rounded-[10px] cursor-pointer ${
          pathname === '/companies' 
            ? 'bg-[#515051] text-white' 
            : 'hover:bg-[#f7f5f31a]'
        }`}>
          <Link href="/companies">Para empresas</Link>
        </li>
        <li className={`flex justify-center items-center h-8 px-2 rounded-[10px] cursor-pointer ${
          pathname === '/about-us' 
            ? 'bg-[#515051] text-white' 
            : 'hover:bg-[#f7f5f31a]'
        }`}>
          <Link href="/about-us">Sobre nosotros</Link>
        </li>
        <li className={`flex justify-center items-center h-8 px-2 rounded-[10px] cursor-pointer ${
          pathname === '/contact' 
            ? 'bg-[#515051] text-white' 
            : 'hover:bg-[#f7f5f31a]'
        }`}>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>

      <div className="flex items-center  w-[388px] h-[40px] gap-[24px]">
        <div className="flex items-center gap-2">
          <Phone size={24} />
          <p className="flex  text-[14px] leading-[16px] font-semibold ">
            +34 919 49 05 18
          </p>
        </div>
        <div className="">
          <Buttons textButton={"Iniciar sesión"} />
        </div>
      </div>

      {isCartAvailable() && isVisible && (
        <div className="absolute min-w-[35vh] min-h-[100vh] top-[64px] right-0 bg-white text-black p-4 rounded border-[2px] transition-all duration-500 ease-in-out">
          <button
            onClick={toggleDiv}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
          <ShoppingCart />
        </div>
      )}
      
      <div className="relative flex items-center justify-center gap-1">
        <Image 
          src={shoppingBag} 
          alt="Shopping Cart" 
          width={24} 
          height={24} 
          className={`cursor-pointer ${isCartAvailable() ? '' : 'opacity-50'}`} 
          onClick={toggleDiv}
        />
        <div>
          {cart.length > 0 && (
            <div className="absolute bottom-0 left-0 bg-[#DD2654] rounded-full h-[7.9px] w-[7.9px] flex items-center justify-center text-xs">
              
            </div>
          )}
        </div>
        {cart.length > 0 && (
            <div className=" bg-[#403e40] rounded-full h-[24px] w-[24px] flex items-center justify-center text-xs p-2 ">
              <p className="flex items-center  justify-center w-[5px] h-4 font-normal text-[12px] text-white">
                {itemsCount}
                </p>
            </div>
          )}
      </div>      
    </div>
  );
};

export default Navbar;