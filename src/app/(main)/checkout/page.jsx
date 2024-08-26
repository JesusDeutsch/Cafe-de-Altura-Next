'use client';
import React, { useState } from "react";
import Total from "./Total";
import PaymentTable from "./PaymentTable";
import { useContext } from 'react';
import { DataContext } from "../../contexts/DataContext";

const CheckOut = () => {

  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = () => {
    localStorage.setItem('paymentAndAddress', JSON.stringify(formData));
    console.log('paymentAndAddress guardado:', formData);
  };
  
  return (
    <div className="flex flex-col items-center pt-[104px] w-full h-auto p-10 gap-6">
      <h2 className="w-[101px] h-[28px] text-[24px] font-medium leading-7 text-[#2A5B45]  ">
        Checkout
      </h2>

      <form className="flex justify-between w-[1200px] h-auto gap-6">
        <PaymentTable onFormChange={handleFormChange} />
        <Total formData={formData} onSubmit={handleSubmit} />
      </form>
    </div>
  );
};



export default CheckOut;
