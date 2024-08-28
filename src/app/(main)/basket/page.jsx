import React from "react";
import Basket from "./Basket";
import Total from "../checkOut/Total";


const checkOut = () => {
  

  return (
    <div className="min-h-screen">

      <Basket/>
      <Total/>

    </div>
  )
}

export default checkOut