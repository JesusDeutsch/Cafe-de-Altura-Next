import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import Link from "next/link";

const TotalShoppingCart = () => {
  const { getCartTotal, getShippingCost, shippingOption } =
    useContext(DataContext);

  const subtotal = getCartTotal().toFixed(2);
  const envio = getShippingCost();
  const total = (parseFloat(subtotal) + envio).toFixed(2);
  const iva = ((parseFloat(total) / 100) * 21).toFixed(2);

  return (
    <div className="flex flex-col bg-[#F7F5F3] w-[384px] h-[280px] gap-4 p-6">
      <div className="flex flex-col w-[336px] h-[176px] gap-2">
        <h3 className="font-semibold text-lg text-black">Total del carrito</h3>
        <div className="border-t border-[#E3DED7] "></div>

        <div className="flex justify-between">
          <p className="font-normal">SUBTOTAL</p>
          <p className="font-semibold text-right">{subtotal} €</p>
        </div>

        <div className="flex justify-between">
          <p className="font-normal">ENVÍO</p>
          <p className="font-semibold text-right">
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
      <div className="flex items-center justify-center gap-4 w-[310px] h-10 mt-5">
        <button className="flex items-center justify-center min-w-[129px] h-10 bg-[#2A5B45] rounded-[4px]">
          <Link href={"/checkOut"}>
            <p className="flex text-white h-4 font-semibold leading-4">
              Ir a checkout
            </p>
          </Link>
        </button>
        <button className="flex items-center justify-center w-[165px] h-10">
          <Link href={"/shop"}>
            <p className=" text-[#2A5B45] h-4 font-semibold leading-4">
              Seguir comprando
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TotalShoppingCart;
