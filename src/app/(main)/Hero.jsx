import Image from 'next/image'
import React from 'react'
import coffeeTree from "../../../public/home-page/landing/coffee-tree.png";


const Hero = () => {
  return (
    
        <div className="flex w-auto h-[486px] items-center justify-center bg-[#e3ded74d]">
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
            src={coffeeTree}
            alt="arbol de cafe"
            width={588}
            height={390}
            className="rooudned-[20px]"
          />
        </div>
      </div>
   
  )
}

export default Hero