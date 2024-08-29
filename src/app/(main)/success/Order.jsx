"use client";
import { DataContext } from "@/app/contexts/DataContext";
import { ClipboardCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Order = () => {
  const { cart, getCartTotal, getShippingCost, shippingOption, clearLocalStorage  } =
    useContext(DataContext);

  const subtotal = getCartTotal().toFixed(2);
  const envio = getShippingCost();
  const total = (parseFloat(subtotal) + envio).toFixed(2);
  const iva = ((parseFloat(total) / 100) * 21).toFixed(2);

  return (
    <div className="flex flex-col w-full h-auto items-center  p-10 gap-6 pt-[104px]">
      <ClipboardCheck
        size={64}
        style={{
          color: "#FFFFFF",
          width: "64px",
          height: "64px",
          gap: "2px",
          backgroundColor: "#2a5b45",
          padding: "12px",
          borderRadius: "20px",
        }}
      />

      <h2 className="w-[383px] h-7 font-medium text-[24px] leading-7 text-[#2A5B45]">
        El pedido ha sido realizado con éxito
      </h2>

      <p className="flex flex-col items-center text-center w-[395px] h-[48px] font-normal text-14px leading-4">
        El pedido #12387 se encuentra en preparación.
        <br />
        Lo recibirás dentro de las fechas acordadas en tu envío.
        <br />
        Hemos enviado un ticket a tu correo electrónico.
        <br />
      </p>

      <div className="flex flex-col w-full -h-[392px] rounded-[10px] p-6 gap-6 bg-[#F7F5F3]">
        <h3 className="font-semibold text-[18px] leading-6">Tu pedido</h3>

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex w-[1,152px] min-h-[55.66px] gap-6 justify-between"
          >
            <div className="flex w-[1,152px]">
              <Image
                src={item.img_url}
                alt="coffe"
                width={55.66}
                height={55.66}
              />

              <div className="flex flex-col w-auto h-9 gap-1">
                <h3 className="text-sm font-semibold">{item.brand}</h3>
                <p className=" h-[16px] text-sm leading-4 font-normal">
                  Paquete de café, 250 gr
                </p>
              </div>

            </div>
              <div className="flex h-[24px] leading-6 text-[18px] font-semibold">
                {(item.price["$numberDecimal"] * item.quantity).toFixed(2)}€
              </div>
          </div>
        ))}

        <div className="border-t border-[#E3DED7] "></div>

        <div className="flex justify-between">
          <p className="font-normal text-[14px] leading-4">SUBTOTAL</p>
          <p className="font-semibold text-[14px] leading-4">{subtotal} €</p>
        </div>

        <div className="flex justify-between">
          <p className="font-normal text-[14px] leading-4">ENVÍO</p>
          <p className="font-semibold text-[14px] leading-4">
            {shippingOption === "standard" ? "GRATIS" : `${envio.toFixed(2)} €`}
          </p>
        </div>

        <div className="border-t border-[#E3DED7] "></div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">TOTAL</p>
          <div className="text-right">
            <p className="font-semibold text-lg">{total} €</p>
            <p className="text-sm text-gray-600">Incluye {iva} € de IVA</p>
          </div>
        </div>
      </div>

      <Link href="/shop">
        <div className="flex justify-center items-center w-[158px] h-10 rounded-[4px] gap-2 bg-[#2A5B45] text-white">
          <p className="font-semibold	text-[14px] leading-4"  onClick={clearLocalStorage}>
            Volver a la tienda
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Order;
