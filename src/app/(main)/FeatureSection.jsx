import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import coffeeShop from '../../../public/home-page/featureSection/image.png'

const FeatureSection = () => {
  return (
    <div className='flex items-center justify-center w-full h-[480px] bg-[#f7f5f3]'>
    <div className='flex justify-between items-center w-[1200px] h-[390px]'>
      <div className='flex flex-col w-[457px] h-[116px] gap-4'>
        <h2 className='w-[340px] h-7 font-medium text-2xl leading-7 text-[#2a5b45]'>Pruébalo en nuestro coffee shop</h2>
        <p className='w-[457px] h-8 text-sm font-normal leading-4 text-gray-900'>
          Visita nuestra cafetería en el centro de la ciudad para probar los
          granos de café antes de hacer tu pedido y llévate un descuento
        </p>
        <div className='flex items-center justify-center w-[118px] h-6'>
          <a href="#"
            className=' flex items-center gap-4'><p className='w-[78px] h-4 font-semibold text-sm leading-4 text-black underline'>Cómo llegar</p><ArrowRight color="black" width={24} height={24}/>
        
          </a>
        </div>
      </div>
      <Image src={coffeeShop}
            alt="arbol de cafe"
            width={588}
            height={390}
            className="rooudned-[20px]"/>
    </div>
  </div>
    )
}

export default FeatureSection