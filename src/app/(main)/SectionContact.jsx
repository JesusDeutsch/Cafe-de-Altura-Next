import { Mail, Phone } from "lucide-react";
import React from "react";

const SplitTwoTone = () => {
  return (
    <div className="flex justify-around w-full h-[552px] bg-[#e3ded7]">
      <div className="flex items-center w-[1200px] h-[552px] gap-6">
        <div className="flex flex-col items-center justify-center w-[588px] h-80 gap-8">
          <div className="flex flex-col w-[588px] h-[68px] gap-3">
            <h3 className="w-[588px] h-6 font-semibold text-lg leading-6 text-gray-900">Entra en contacto con nosotros</h3>
            <p className="w-[588px] h-8 font-normal text-sm leading-4 text-gray-500">
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="flex flex-col w-[588px] h-[220px] gap-6 font-normal text-sm leading-4 text-gray-500">
            <p>
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <p>
              742 Evergreen Terrace <br />
              Springfield, OR 12345
            </p>
            <div className="flex items-center w-[588px] h-6 gap-3">
            <Phone  width={24} height={24}/>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="flex items-center w-[588px] h-6 gap-3">
              <Mail width={24} height={24}/>
              <p>support@example.com</p>
            </div>
            <p>
              ¿Buscas un trabajo? <a href="#" className="text-black font-semibold">Ver nuestras ofertas.</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[588px] h-[552px] bg-[white] shadow-[0px_4px_4px_0px_#00000040]">
          
        </div>
      </div>
    </div>
  );
};

export default SplitTwoTone;
