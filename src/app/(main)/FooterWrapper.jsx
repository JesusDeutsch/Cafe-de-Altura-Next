import Image from "next/image";
import React from "react";
import hotCoffee from "../../../public/home-page/navbar/ps_coffee-hot.png";
import { Mail, Phone } from "lucide-react";
const FooterWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[310px] bg-[#1f1815]">
      <div className="flex flex-col w-[1200px] h-[204px] gap-4 ml-10 mt-[28.61px]">
        <div className="flex items-center w-72 h-9 gap-[7.33px]">
          <p className="w-[186px] h-9 font-normal text-[23.46px] leading-[35.19px] text-[white]">
            cafedealtura.com
          </p>
          <Image src={hotCoffee} alt="coffe" width={21} height={25} />
        </div>
        <div className="w-[1132px] h-[152px] flex relative justify-between text-[white]">
          <div className="flex flex-col justify-center w-[255.33px] h-[152px] gap-4">
            <h3 className="w-[131px] h-6 font-semibold text-lg leading-6">
              Te ayudamos en
            </h3>
            <div className="flex items-center justify-center w-[182px] h-12 rounded gap-2 bg-[#515051]">
              <Phone width={24} height={24} />
              <p className="w-[102px] h-4 font-semibold text-sm leading-4">
                +34 919 49 05 18
              </p>
            </div>
            <div className="flex items-center justify-center w-[232px] h-12 rounded gap-2 bg-[#515051]">
              <Mail width={24} height={24} />
              <p className="w-[152px] h-4 font-semibold text-sm leading-4">
                hola@cafedealtura.com
              </p>
            </div>
          </div>
          <div className="flex flex-col absolute w-24 h-36 gap-4 left-[577px] right-[459px] top-[2.61px] bottom-[5.39px]">
            <p className="h-4 font-semibold text-sm leading-4">Tienda</p>
            <p className="h-4 font-semibold text-sm leading-4">Suscripción</p>
            <p className="h-4 font-semibold text-sm leading-4">Para empresas</p>
            <p className="h-4 font-semibold text-sm leading-4">
              Sobre nosotros
            </p>
            <p className="h-4 font-semibold text-sm leading-4">Contacto</p>
          </div>
          <div className="flex flex-col absolute w-[255.33px] h-20 gap-4 left-[800px] right-[76.67px] top-[3px] bottom-[69px]">
            <p className="h-4 font-semibold text-sm leading-4">
              Política de privacidad
            </p>
            <p className="h-4 font-semibold text-sm leading-4">
              Política de cookies
            </p>
            <p className="h-4 font-semibold text-sm leading-4">
              Términos y condiciones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWrapper;
