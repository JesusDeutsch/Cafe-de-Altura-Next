import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const Faq = () => {
  return (
    <div className="w-auto min-h-[421px] flex flex-col items-center justify-center bg-[#2a5b45] gap-6 py-[48px] px-386px">
        <h2 className="flex w-[228px] h-[93px] text-2xl font-medium leading-7 text-[white] ">
          Preguntas frecuentes
        </h2>

        <Accordion
          type="single"
          collapsible
          className="flex flex-col items-center justify-center w-[668px] min-h-[216px] gap-4 "
        >
          <AccordionItem
            value="item-1"
            className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
          >
            <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline">
              <h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6">
                ¿Cómo hago el pedido?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
              Selecciona el café que desees probar y completa el proceso de
              compra. Si lo prefieres, te preguntaremos cada cuánto quieres que
              te lo mandemos a casa y así nunca te quedarás sin café.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-6 rounded-[10px] overflow-hidden"
          >
            <AccordionTrigger className="w-[620px] h-6 flex no-underline hover:no-underline">
              <h3 className=" flex w-[290px] h-6 font-semibold text-lg leading-6">
                ¿Por qué los precios son tan bajos?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
              Viajamos constantemente para encontrar los mejores granos y a los
              agricultores más exigentes. Si podemos ofrecerte estos precios es
              porque tratamos directamente con los productores de café, sin
              intermediarios. Así obtenemos el mejor precio para ti y la persona
              que está detrás de los granos de café recibe el mayor beneficio
              posible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="flex flex-col items-center w-[668px] h-auto gap-4 bg-[white]  text-[#2b2a2b] p-4 rounded-[10px] overflow-hidden"
          >
            <AccordionTrigger className="w-[620px] h-auto flex no-underline hover:no-underline">
              <h3 className=" flex w-[290px] font-semibold text-lg leading-6">
                ¿Es posible enviar café a mi oficina?
              </h3>
            </AccordionTrigger>
            <AccordionContent className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-t-2 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam culpa omnis illum! Commodi rem facilis quis voluptatem
              enim deleniti eos tempora exercitationem sunt non modi, a omnis
              officiis numquam beatae.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="flex w-full items-center gap-4">
            <p className="h-4 text-sm font-semibold leading-4 text-white underline">
              Resolvemos tus dudas
            </p>
            <MoveRight color="white" width={24} height={24} />
          </Link>
        </div>
      </div>  )
}

export default Faq