"use client";
import { ClipboardCheck, Gift, Icon, MoveRight, Truck } from "lucide-react";
import Image from "next/image";
import coffeeTree from "../../../public/landing/coffee-tree.png";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  const { items, error } = useContext(DataContext);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pt-[48px]">
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
            src={coffeeTree}
            alt="arbol de cafe"
            width={588}
            height={390}
            className="rooudned-[20px]"
          />
        </div>
      </div>

      {/* AQUI TERMINA EL LANDING Y EMPIEZAN LOS BENEFICIOS DE LA PAGINA*/}

      <div
        className="w-full h-[380px] flex items-center justify-center flex-col gap-6"
        style={{
          backgroundImage: `url(/conditions/coffebackground.png)`,
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

      <div className="w-full h-[603.39px] flex flex-col items-center justify-center gap-10">
        <div className="w-[120px] h-7 font-medium text-2xl leading-7 text-[#2a5b45]">
          <h2>Novedades</h2>
        </div>
        <div className=" flex justify-center items-center w-full h-[391.39px] gap-6">
          {items.slice(0, 4).map((item) => (
            <div
              className="group flex flex-col items-center justify-center w-[282px] h-[391.39px] border gap-6 rounded-lg border-[solid] hover:bg-[#f7f5f3]"
              key={item._id}
            >
              <Image
                src={item.img_url}
                alt="coffe"
                width={219.39}
                height={219.39}
              />
              <div className="flex justify-center flex-col items-center gap-3">
                <h3 className="font-semibold text-sm">{item.brand}</h3>
                <p className="text-sm font-normal">
                  {item.price["$numberDecimal"]}€
                </p>
              </div>

              <div className="flex justify-center items-center w-[60px] h-8 rounded gap-2 bg-[#2a5b45b2]  group-hover:bg-[#2a5b45]">
                <a
                  href="#"
                  className="w-11 h-4 text-sm font-semibold leading-4 text-[white] no-underline "
                >
                  Añadir
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[101px] h-6">
          <Link href="/shop" className="flex w-full items-center gap-4">
            <p className="h-4 text-sm font-semibold leading-4 text-black underline">
              Ver todos
            </p>
            <MoveRight width={24} height={24} />
          </Link>
        </div>
      </div>






      {/* AQUI COMIENZA EL ACORDION */}



      <div className="w-full min-h-[421px] flex flex-col items-center justify-center bg-[#2a5b45] gap-6 py-[48px] px-386px">
      <h2 className="flex w-[228px] h-[93px] text-2xl font-medium leading-7 text-[white] ">Preguntas frecuentes</h2>
      
        <Accordion type="single" collapsible className="flex flex-col items-center justify-center w-[668px] min-h-[216px] gap-4 ">
          <AccordionItem value="item-1" className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden">
            <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline"><h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6">¿Cómo hago el pedido?</h3></AccordionTrigger>
            <AccordionContent className="w-[620px] h-8 font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
          
          Selecciona el café que desees probar y completa el proceso de
            compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te
            lo mandemos a casa y así nunca te quedarás sin café.
          
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden">
            <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline"><h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6">¿Por qué los precios son tan bajos?</h3></AccordionTrigger>
            <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">

            Viajamos constantemente para encontrar los mejores granos y a los
            agricultores más exigentes. Si podemos ofrecerte estos precios es
            porque tratamos directamente con los productores de café, sin
            intermediarios. Así obtenemos el mejor precio para ti y la persona
            que está detrás de los granos de café recibe el mayor beneficio
            posible.

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-4 rounded-[10px] overflow-hidden">
            <AccordionTrigger className="w-[620px] h-auto flex no-underline hover:no-underline"><h3 className=" flex w-[290px] font-semibold text-lg leading-6">¿Es posible enviar café a mi oficina?</h3></AccordionTrigger>
            <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
             
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            culpa omnis illum! Commodi rem facilis quis voluptatem enim deleniti
            eos tempora exercitationem sunt non modi, a omnis officiis numquam
            beatae.

            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center gap-4">
        <Link href="/contact"className="flex w-full items-center gap-4">
        <p className="h-4 text-sm font-semibold leading-4 text-white underline">Resolvemos tus dudas</p>
          <MoveRight color="white" width={24} height={24} />
        </Link>
      </div>
      </div>

      <div>
        saddasdasda
      </div>
    </div>
  );
};

export default Home;

