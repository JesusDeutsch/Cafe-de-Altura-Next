"use client";

import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../contexts/DataContext"; // Asegúrate de que la ruta sea correcta

const ShippingOptions = () => {
  const { shippingOption, updateShippingOption, getShippingCost } = useContext(DataContext);
  
  const { 
    register, 
    watch
   } = useForm({
    defaultValues: {
      shippingOption: shippingOption,
    },
  });

  const selectedOption = watch("shippingOption");

  useEffect(() => {
    updateShippingOption(selectedOption);
  }, [selectedOption, updateShippingOption]);

  const shippingCost = getShippingCost();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold w-[143px] h-[24px] leading-6 text-black">Seleccionar envío</h3>

      <form className="flex flex-col justifc">
        <div className="flex items-center w-[776px] h-9 gap-4 mb-4">
          <input
            type="radio"
            id="standard"
            value="standard"
            {...register("shippingOption")}
            className="w-4 h-4 accent-[#2A5B45]"
          />
          <label htmlFor="standard" className="w-[657px] h-9 gap-2 cursor-pointer">
            <div className="font-semibold text-[14px] h-4 leading-4">Envío 5-7 días</div>
            <div className="font-normal w-[202px] h-4 text-[14px] leading-4">Opción estándar sin seguimiento</div>
          </label>
          <span className="w-[63px] h-6 text-[18px] font-semibold leading-4 ml-auto">
            {selectedOption === 'standard' ? 'GRATIS' : '0,00 €'}
          </span>
        </div>

        <div className="flex items-center w-[776px] h-9 gap-4 mb-4">
          <input
            type="radio"
            id="express"
            value="express"
            {...register("shippingOption")}
            className="w-4 h-4 accent-[#2A5B45]"
          />
          <label htmlFor="express" className="w-[657px] h-9 gap-2 cursor-pointer">
            <div className="font-semibold text-[14px] h-4 leading-4">Envío urgente 24h</div>
            <div className="font-normal h-4 text-[14px] leading-4">
              Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).
            </div>
          </label>
          <span className="w-[63px] h-6 text-[18px] font-semibold leading-4 ml-auto">9,00 €</span>
        </div>
      </form>
    </div>
  );
};

export default ShippingOptions;