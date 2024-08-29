"use client";
import CardsConditions from "../CardsConditions";
import FooterWrapper from "../FooterWrapper";
import ListCoffees from "./ListCoffees";

const Shop = () => {
  return (
    <div>
      <ListCoffees />
      <CardsConditions />
      <FooterWrapper />
    </div>
  );
};

export default Shop;
