import React from 'react'
import { ClipboardCheck, Gift, Truck } from "lucide-react";


const CardsConditions = () => {
  return (
    <div
    className="w-auto h-[380px] flex items-center justify-center flex-col gap-6"
    style={{
      backgroundImage: `url(/home-page/conditions/coffebackground.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h2 className="flex w-[350px] h-7 font-medium text-2xl leading-7 text-[white]">
      Café con las mejores condiciones
    </h2>
    <div className="flex items-center w-[996px] gap-6">
      <div className="flex justify-center flex-col items-center w-[316px] h-[232px] border gap-4 border-[#f7f5f3] bg-white p-0 rounded-lg">
        <ClipboardCheck
          size={40}
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
        <h3 className="w-[268px] font-semibold text-lg leading-6 text-center">
          Recibe tu pedido sin preocuparte
        </h3>
        <p className="w-[268px] text-sm leading-4 text-center">
          Tienes cosas más importantes en la cabeza, por eso con nuestra
          suscripción de café, nunca te quedarás sin tu taza de la mañana.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center w-[316px] h-[232px]  gap-4  border border-[#f7f5f3] bg-white p-0 rounded-lg">
        <Truck
          size={40}
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
        <h3 className="w-[268px] font-semibold text-lg leading-6 text-center">
          Envío en 24/48h
        </h3>
        <p className="w-[268px] text-sm leading-4 text-center">
          Pide tu café antes de las 12h y lo recibirás al día siguiente.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center w-[316px] h-[232px] border gap-4 border-[#f7f5f3] bg-white p-0 rounded-lg">
        <Gift
          size={40}
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
        <h3 className="w-[268px] font-semibold text-lg leading-6 text-center">
          Descuentos y beneficios
        </h3>
        <p className="w-[268px] text-sm leading-4 text-center">
          Cada dos meses, te regalamos una bolsa de un nuevo origen
          sorpresa, para que lo descubras junto a nosotros.
        </p>
      </div>
    </div>
  </div>
  )
}

export default CardsConditions