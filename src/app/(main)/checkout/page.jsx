'use client';
import React, { useState } from "react";
import PaymentTable from "../checkOut/PaymentTable";


const CheckOut = () => {

  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData(data);
  };3


  
  return (
    <div className="flex flex-col items-center pt-[104px] w-full h-auto p-10 gap-6">
      <h2 className="w-[101px] h-[28px] text-[24px] font-medium leading-7 text-[#2A5B45]  ">
        Checkout
      </h2>

      <div className="flex justify-between w-[1200px] h-auto gap-6">
        <PaymentTable onFormChange={handleFormChange} />
      </div>
      
    </div>
  );
};




export default CheckOut;
