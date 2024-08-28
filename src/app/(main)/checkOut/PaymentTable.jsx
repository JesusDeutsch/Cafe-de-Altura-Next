"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import Image from "next/image";
import bizum from "../../../../public/home-page/checkOut/bizum.png";
import Total from "./Total";
import { usePathname, useRouter } from "next/navigation";

const PaymentTable = ({ onFormChange }) => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const pathname = usePathname();

  console.log("ESTE ES PATHNAME", pathname);

  if (pathname.includes("aleman")) {
    console.log("ENTRO AL IF");
  }

  const options = countryList().getData();
  const [selectedPayment, setSelectedPayment] = useState("debitCard");
  const [openItem, setOpenItem] = useState("item-debitCard");

  // Este efecto inicializa el método de pago al cargar el componente
  useEffect(() => {
    setValue("paymentMethod", "debitCard");
  }, [setValue]);

  // Esta función maneja los cambios en el método de pago
  const handlePaymentChange = (e, value) => {
    e.stopPropagation();
    setSelectedPayment(value);
    setValue("paymentMethod", value);
    setOpenItem(`item-${value}`);
    onFormChange({ ...watch(), paymentMethod: value }); // Actualiza el formulario al cambiar el método de pago
  };


  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
    router.push("/success");
    reset();
  };

  return (
    <form className="flex">
      <div className="flex flex-col w-[792px] h-auto gap-6 p-2">
        <h3 className="w-[231px] h-[24px] text-[18px] font-semibold leading-6 text-black">
          Seleccionar método de pago
        </h3>

        <div className="flex flex-col w-[776px] h-auto gap-4">
          {/* Tarjeta de débito */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 w-full cursor-pointer">
              <input
                name="acordeon"
                type="radio"
                id="debitCard"
                value="debitCard"
                {...register("paymentMethod")}
                checked={selectedPayment === "debitCard"}
                onChange={(e) => handlePaymentChange(e, "debitCard")}
                className="w-4 h-4 accent-[#2A5B45]"
              />
              <label
                htmlFor="debitCard"
                className="flex items-center w-[665px] h-9 gap-1 cursor-pointer"
                onClick={(e) => handlePaymentChange(e, "debitCard")}
              >
                <div>
                  <p className="flex font-semibold text-[14px] h-4">
                    Tarjeta de débito
                  </p>
                  {selectedPayment === "debitCard" && (
                    <p className="flex font-normal w-[202px] h-4 text-[14px] leading-4">
                      Opción estándar sin seguimiento
                    </p>
                  )}
                </div>
              </label>
            </div>
            {selectedPayment === "debitCard" && (
              <div className="flex flex-col gap-4 w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-none pt-4">
                <div className="flex flex-col w-[279px] h-[55px] gap-[3px]">
                  <label htmlFor="owner" className="w-9 h-4">
                    <p className="font-normal text-xs text-gray-700">Titular</p>
                  </label>
                  <input
                    type="text"
                    className="w-[279px] min-h-9 px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md hover:border-[#9b9ea3] focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
                    placeholder="Nombre del titular"
                    {...register("owner", {
                      required: {
                        value: true,
                        message: "Titular es requerido",
                      },
                    })}
                  />
                  {errors.owner && (
                    <span className="block w-[210px] text-red-600 text-sm">
                      {errors.owner.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-[279px] h-[55px] gap-[3px] pt-2">
                  <label htmlFor="numberCard" className="w-9 h-4">
                    <p className="font-normal text-xs text-gray-700">
                      Número de la tarjeta
                    </p>
                  </label>
                  <input
                    type="number"
                    className="w-[279px] min-h-9 px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md hover:border-[#9b9ea3] focus:outline-[#3f8f6b] focus:shadow-[0px_1px_2px_0px_#0000000d] no-spinner"
                    placeholder="1234 1234 1234 1234"
                    {...register("numberCard", {
                      required: {
                        value: true,
                        message: "Número de la tarjeta es requerido",
                      },
                    })}
                  />
                  {errors.numberCard && (
                    <span className="block w-[210px] text-red-600 text-sm">
                      {errors.numberCard.message}
                    </span>
                  )}
                </div>

                <div className="flex pt-2 pb-4 gap-6">
                  <div className="flex flex-col w-[128px] h-[55px] gap-[3px] pt-2">
                    <label htmlFor="expirationDate" className=" h-4">
                      <p className="flex min-w-9 font-normal text-xs text-gray-700">
                        Fecha de caducidad
                      </p>
                    </label>
                    <input
                      type="number"
                      className="w-[128px] min-h-[36px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md hover:border-[#9b9ea3] focus:outline-[#3f8f6b] focus:shadow-[0px_1px_2px_0px_#0000000d] no-spinner"
                      placeholder="MM / YY"
                      {...register("expirationDate", {
                        required: {
                          value: true,
                          message: "Fecha de caducidad es requerida",
                        },
                      })}
                    />
                    {errors.expirationDate && (
                      <span className="block w-[210px] text-red-600 text-sm">
                        {errors.expirationDate.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col w-[128px] h-[55px] gap-[3px] pt-2">
                    <label htmlFor="cvc" className=" h-4">
                      <p className="flex min-w-9 font-normal text-xs text-gray-700">
                        CVC
                      </p>
                    </label>
                    <input
                      className="w-[128px] min-h-[36px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md hover:border-[#9b9ea3] focus:outline-[#3f8f6b] focus:shadow-[0px_1px_2px_0px_#0000000d] no-spinner"
                      type="text"
                      {...register("cvc", {
                        required: true,
                        pattern: /^\d{3}$/,
                        maxLength: 3,
                      })}
                      placeholder="123"
                      maxLength={3}
                      inputMode="numeric"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
                    />
                    {errors.cvc && (
                      <span className="block w-[210px] text-red-600 text-sm">
                        {errors.cvc.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Transferencia bancaria */}
          <div className="flex flex-col">
            <div className="flex items-center w-full cursor-pointer">
              <input
                name="acordeon"
                type="radio"
                id="bankTransfer"
                value="bankTransfer"
                {...register("paymentMethod")}
                checked={selectedPayment === "bankTransfer"}
                onChange={(e) => handlePaymentChange(e, "bankTransfer")}
                className="flex items-centerw-4 h-4 accent-[#2A5B45]"
              />
              <label
                htmlFor="bankTransfer"
                className="flex flex-col w-[665px] h-auto gap-1 pb-0 cursor-pointer"
                onClick={(e) => handlePaymentChange(e, "bankTransfer")}
              >
                <p className="flex font-semibold text-[14px] h-4">
                  Transferencia bancaria a la cuenta ES12 1234 1234 123457890
                </p>
                {selectedPayment === "bankTransfer" && (
                  <div className="w-[620px] h-auto font-normal text-xs leading-4 text-[#2b2a2b] border-none pt-4">
                    <p className="flex item-center font-normal w-auto h-4 text-[14px]">
                      Será necesario recibir el comprobante de la transferencia
                      para preparar tu pedido.
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Bizum */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 w-full cursor-pointer">
              <input
                type="radio"
                id="bizum"
                value="bizum"
                {...register("paymentMethod")}
                checked={selectedPayment === "bizum"}
                onChange={(e) => handlePaymentChange(e, "bizum")}
                className="w-4 h-4 accent-[#2A5B45]"
              />
              <label
                htmlFor="bizum"
                className="flex items-center w-[665px] h-9 cursor-pointer gap-4"
                onClick={(e) => handlePaymentChange(e, "bizum")}
              >
                <p className="flex font-semibold text-[14px] h-4">Bizum</p>
                <Image src={bizum} alt="Bizum" width={70} height={30} />
              </label>
            </div>
          </div>
        </div>

        <h3 className="w-[149px] h-6 text-[18px] font-semibold leading-6">
          Dirección de envío
        </h3>

        <div className="flex flex-col w-[470px] h-[54px] gap-1">
          <label
            htmlFor="firstName"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            className="w-[521px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
            {...register("firstName", {
              required: { value: true, message: "Nombre es requerido" },
            })}
          />

          {errors.firstName && (
            <span className="block w-[210px] text-red-600 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-[470px] h-[54px] gap-1">
          <label
            htmlFor="lastName"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            Apellidos
          </label>
          <input
            type="text"
            className="w-[521px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
            {...register("lastName", {
              required: { value: true, message: "Apellidos requeridos" },
            })}
          />

          {errors.lastName && (
            <span className="block w-[210px] text-red-600 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="numberPhone"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700 "
          >
            Teléfono
          </label>
          <input
            type="number"
            {...register("numberPhone", {
              required: { value: true, message: "Teléfono es requerido" },
            })}
            className="w-[521px] min-h-[34px] border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid-[2px] focus:shadow-[0px_1px_2px_0px_#0000000d] outline-none px-2.5 no-spinner"
            placeholder="+34 600 6000 600"
          />

          {errors.numberPhone && (
            <span className="block w-[210px] text-red-600 text-sm">
              {errors.numberPhone.message}
            </span>
          )}
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
            {...register("email", {
              required: { value: true, message: "Correo es requerido" },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
            size="470px"
            className="w-[521px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid-[2px] focus:shadow-[0px_1px_2px_0px_#0000000d]"
          />
          {errors.email && (
            <span className="block w-[210px] text-red-600 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="country"
            className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
          >
            País
          </label>
          <Controller
            name="country"
            control={control}
            rules={{ required: "El país es requerido" }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                placeholder="Seleccionar"
                className="w-[521px] min-h-[34px] border border-gray-300 rounded-md"
                classNamePrefix="react-select"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    minHeight: "34px",
                    borderColor: state.isFocused
                      ? "#3f8f6b"
                      : state.isHovered
                      ? "#3f8f6b"
                      : "#d1d5db",
                    boxShadow: state.isFocused ? "0 0 0 1px #3f8f6b" : "none",
                    "&:hover": {
                      borderColor: "#000000",
                    },
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    padding: "0",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    marginLeft: "0px",
                    marginRight: "0px",
                  }),
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    padding: "4px",
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                }}
              />
            )}
          />
          {errors.country && (
            <span className="text-red-600 text-sm">
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="flex w-[521px] items-center gap-6">
          <div className="flex flex-col w-[470px] h-[54px] gap-1">
            <label
              htmlFor="Population"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              Población
            </label>
            <input
              type="text"
              className="w-[249px] min-h-[36px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              {...register("Population", {
                required: { value: true, message: "Población requerida" },
              })}
            />

            {errors.Population && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.Population.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-[470px] h-[54px] gap-1">
            <label
              htmlFor="CP"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              CP
            </label>
            <input
              type="text"
              {...register("CP", {
                required: true,
                message: "CP es requerido",
                pattern: /^\d{5}$/,
                maxLength: 5,
              })}
              placeholder="123"
              maxLength={5}
              inputMode="numeric"
              className="w-[249px] min-h-[36px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
            />

            {errors.CP && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.CP.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-[521px] gap-6  ">
          <div className="flex flex-col w-[112.25px] h-[55px] gap-1">
            <label
              htmlFor="street"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              Calle
            </label>
            <input
              type="text"
              className="w-[112.25px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              {...register("street", {
                required: { value: true, message: "Calle es requerida" },
              })}
            />

            {errors.street && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.street.message}
              </span>
            )}
          </div>

          <div className="flex flex-col  w-[112.25px] h-[55px] gap-1">
            <label
              htmlFor="streetNumber"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              Nº
            </label>
            <input
              type="text"
              className="w-[112.25px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              {...register("streetNumber", {
                required: { value: true, message: "Nº es requerido" },
              })}
            />

            {errors.streetNumber && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.streetNumber.message}
              </span>
            )}
          </div>

          <div className="flex flex-col  w-[112.25px] h-[55px] gap-1">
            <label
              htmlFor="floor"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              Piso
            </label>
            <input
              type="text"
              className="w-[112.25px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              {...register("floor", {
                required: { value: true, message: "Piso requerido" },
              })}
            />

            {errors.floor && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.floor.message}
              </span>
            )}
          </div>

          <div className="flex flex-col  w-[112.25px] h-[55px] gap-1">
            <label
              htmlFor="door"
              className="w-24 h-4 font-normal text-xs leading-4 text-gray-700"
            >
              Puerta
            </label>
            <input
              type="text"
              className="w-[112.25px] min-h-[34px] px-2.5 border border-gray-300 shadow-[0px_1px_2px_0px_#0000000d] rounded-md border-solid hover:border-[#9b9ea3]  focus:outline-[#3f8f6b] solid 2px focus:shadow-[0px_1px_2px_0px_#0000000d]"
              {...register("door", {
                required: { value: true, message: "Puerta es requerida" },
              })}
            />

            {errors.door && (
              <span className="block w-[210px] text-red-600 text-sm">
                {errors.door.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <Total handleSubmit={handleSubmit} onSubmit={onSubmit} />
    </form>
  );
};

export default PaymentTable;
