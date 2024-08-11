import { ClipboardCheck, Gift, Icon, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex w-full h-[486px] items-center justify-center bg-[#e3ded74d]">
        <div className="h-[390px] gap-6 flex justify-center items-center">
          <div className="flex justify-between flex-col w-[588px] h-[232px] gap-4">
            <h3 className="flex w-[588px] h-6 font-semibold text-lg leading-6 text-[#2a5b45]">
              De la planta a tu taza
            </h3>
            <h1 className="flex w-[588px] h-[88px] text-[40px] leading-[44px] font-semibold text-black">
              El mejor café del mundo, ahora en tu casa.
            </h1>
            <p className="w-[588px] h-8 font-normal text-sm leading-4 text-gray-900">
              Trabajamos con agricultores de todo el mundo para seleccionar los
              mejores granos de café y que puedas viajar desde la comodidad de
              tu hogar.
            </p>
            <div className="flex items-center gap-4 justify-items-start">
              <div className="w-[168px] h-10 flex justify-center items-center gap-2 bg-[#1f1815] rounded">
                <a
                  href="#"
                  className="flex justify-center w-[120px] h-4 text-sm font-semibold leading-4 text-white no-underline"
                >
                  Descubrir orígenes
                </a>
              </div>
              <div className="flex justify-center items-center w-[137px] h-10 rounded bg-[#2a5b45] gap-2">
                <a
                  href="#"
                  className="flex justify-center w-[89px] h-4 text-sm font-semibold leading-4 text-white no-underline"
                >
                  Comprar café
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/coffee-tree.png"
            alt="arbol de cafe"
            width={588}
            height={390}
            className="rooudned-[20px]"
          />
        </div>
      </div>

      {/* AQUI TERMINA EL LANDING Y EMPIEZAN LOS BENEFICIOS DE LA PAGINA*/}

      <div className="w-full h-[380px] flex items-center justify-center flex-col gap-6"   style={{
    backgroundImage: `url(/conditions/coffebackground.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
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
    </div>
  );
};

export default Home;
