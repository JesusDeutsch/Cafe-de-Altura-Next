import React from 'react'
import { Phone } from 'lucide-react';
import Buttons from './Buttons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full h-[64px] bg-[#2b2a2b] text-white px-[12px]'>
        <div className='flex items-center justify-center gap-[7px] w-[214px] h-[36px]'>

            <p className='flex items-center w-[186px] h-[36px] opacity-[86%] text-[24px] leading-[35px] font-normal gap-2'>cafedealtura.com<Image src="/ps_coffee-hot.png" alt="coffe" width={21} height={25} /> </p>
            


        </div>

        <ul className='flex gap-4 text-[14px] leading-[16px] font-semibold	'>
            <li><Link href="/shop">Tienda</Link> </li>
            <li><Link href="/subscription">Suscripción</Link></li>
            <li><Link href="/Para-empresas">Para empresas</Link></li>
            <li><Link href="Sobre-nosotros">Sobre nosotros</Link></li>
            <li><Link href="contact">Contacto</Link></li>
        </ul>

        <div className='flex items-center  w-[388px] h-[40px] gap-[24px]'>
            <div className='flex items-center gap-2'><Phone size={24}/>
            
            <p className='flex  text-[14px] leading-[16px] font-semibold '>+34 919 49 05 18 </p> 
            
            </div>
            
            <div className=''>
                <Buttons textButton={'Iniciar sesión'}/>

            </div>

        </div>
        <div>
        <Image src="/Carr.png" alt="Shopping Cart" width={24} height={24} />        
        </div>
    </div>
  )
}

export default Navbar