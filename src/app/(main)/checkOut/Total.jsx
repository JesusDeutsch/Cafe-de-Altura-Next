'use client'
import React, { useContext } from 'react'
import { DataContext } from "../../contexts/DataContext";

const Total = ({ onSubmit, handleSubmit, isFormValid }) => {
    const { getCartTotal, getShippingCost, shippingOption } = useContext(DataContext);
  
    const subtotal = getCartTotal().toFixed(2);
    const envio = getShippingCost();
    const total = (parseFloat(subtotal) + envio).toFixed(2);
    const iva = (parseFloat(total) / 100 * 21).toFixed(2);

    return (
        <div className='flex flex-col rounded-[10px] bg-[#F7F5F3] w-[384px] h-[300px] gap-4 p-6'>
            <div className='flex flex-col w-[336px] h-[176px] gap-4'>
                <h3 className='font-semibold text-lg text-black'>
                    Total del carrito
                </h3>
                <div className='border-t border-[#E3DED7] '></div>
    
                <div className='flex justify-between'>
                  <p className='font-normal'>SUBTOTAL</p>
                  <p className='font-semibold text-right'>{subtotal} €</p>
                </div>
    
                <div className='flex justify-between'>
                  <p className='font-normal'>ENVÍO</p>
                  <p className='font-semibold text-right'>
                    {shippingOption === 'standard' ? 'GRATIS' : `${envio.toFixed(2)} €`}
                  </p>
                </div>
    
                <div className='border-t border-[#E3DED7] '></div>
    
                <div className='flex justify-between items-center'>
                  <p className='font-semibold text-lg'>TOTAL</p>
                  <div className='text-right'>
                    <p className='font-semibold text-lg'>{total} €</p>
                    <p className='text-sm text-gray-600'>Incluye {iva} € de IVA</p>
                  </div>
                </div>
                </div>
          <div className='flex gap-2 w-[310px] h-10 mt-5 pb-6'>
          <button 
                    type='button' 
                    className={`flex items-center justify-center w-[196px] h-10 rounded-[4px] ${
                        isFormValid 
                        ? 'bg-[#2A5B45] text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isFormValid}
                >
                    <p className='flex h-4 font-semibold leading-4'>
                        Pagar y realizar pedido
                    </p>
                </button>
         
          </div>
        </div>
      );
      
    }
    

export default Total