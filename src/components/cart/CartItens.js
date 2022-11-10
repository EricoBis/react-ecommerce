import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartList } from "./style";
import Item from "./Item";

function CartItens() {
  const { cart } = useContext(CartContext);

  return (
    <CartList>
      {cart.map((item, index) => {
        return <Item key={index} value={item} />;
      })}
    </CartList> 
  );
}

export default CartItens;
