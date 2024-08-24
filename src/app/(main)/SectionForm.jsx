"use client";
import React from "react";
import { useForm } from "react-hook-form";


const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);

    reset()
  };
  

  return (
    <div className="flex justify-center items-center w-[588px] h-[652px] bg-[white] shadow-[0px_4px_4px_0px_#00000040] ">
      <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[470px] h-[588px] gap-[24px]">
        <div className="flex flex-col w-[470px] h-[54px] gap-1">
          <label
            htmlFor="fullName"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            Nombre completo
          </label>
          <input
            type="text"
            className="w-[470px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
            {...register("fullName", {required:{value:true, message: "Nombre completo es requerido"}})}
            />
            
            {errors.fullName && <span className="block w-[210px] text-red-600 text-sm">{errors.fullName.message}</span>}
        
        </div>

        <div className="flex flex-col w-[470px] h-[54px] gap-1">
          <label
            htmlFor="email"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", {required: {value: true, message: "Correo es requerido"},
              pattern: {value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Correo no válido",}
            })}
            size="470px"
            className="w-[470px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid-[2px] focus:shadow-[0px_1px_2px_0px_#0000000d]"
          />
                    {errors.email && <span className="block w-[210px] text-red-600 text-sm" >{errors.email.message}</span>}

        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="numberPhone"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700 "
          >
            Teléfono
          </label>
          <label htmlFor="codeArea"></label>
          <div className="flex items-center w-[470px] h-[38px] border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] gap-1 rounded-md border-solid hover:border-[#9b9ea3]  focus-within:hover:shadow-none focus-within:hover:border-[#3F8F6B] focus-within:hover:border-2 ">
            <select
            {...register("codeArea")}
              className=" flex items-center w-[68px] h-[28px] text-center rounded-md border-none  outline-none "
            >
              <option value="US">US</option>
              <option value="ES">ES</option>
              <option value="VE">VE</option>
            </select>
            <input
              type="tel"
              {...register("numberPhone", {required:{value:true, message:"Teléfono es requerido"}})}
              className="border-0 outline-none px-2.5"
              placeholder="+1 (555) 987-6543"
            />

          </div>
                    {errors.numberPhone && <span className="block w-[210px] text-red-600 text-sm" >{errors.numberPhone.message}</span>}
        </div>

        <div className="flex flex-col w-[470px] h-[142px] gap-1">
          <label
            htmlFor="comment"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            Comentarios
          </label>
          <textarea
            {...register("comment")}
            placeholder="¿En qué podemos ayudarte?"
            className=" w-[470px] h-[122px] border border-gray-300 rounded-md border-solid pt-2.5 px-2.5 focus-within:outline-[#3f8f6b] focus:solid 2px hover:border-[#9b9ea3]"
          ></textarea>
        </div>
          <div>
        <div className="flex items-center gap-3 w-[442px] h-4">
          <input
            type="checkbox"
            {...register("TermsForm", {required:{value:true, message:"Debes aceptar los terminos para continuar"}})}
            className="accent-[#3f8f6b]"
          />

          <label
            htmlFor="TermsForm"
            className="w-[442px] h-4 text-gray-700 text-sm leading-4 font-normal"
          >
            Acepto la{" "}
            <a
              href="#"
              className="text-gray-700 text-sm leading-4 font-semibold underline"
            >
              Política de Privacidad
            </a>{" "}
            y los
            <a
              href="#"
              className="text-gray-700 text-sm leading-4 font-semibold underline"
            >
              Términos y condiciones
            </a>
            .
          </label>
        </div>
          {errors.TermsForm && <span className="block w-full text-red-600 text-sm" >{errors.TermsForm.message}</span>}
          </div>
        <button
          type="submit"
          className="flex items-center justify-center w-[90px] h-[40px] rounded gap-1 bg-[#2a5b45] cursor-pointer border-0"
        >
          <p className="text-[white] w-[42px] h-4 font-semibold text-sm leading-4">
            Enviar
          </p>
        </button>
      </form>
    </div>
  );
};

export default Form;
