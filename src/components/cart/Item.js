import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Flex } from "../../style";
import { CartItem, DeleteIcon, ItemImg, ItemTitle } from "./style";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function Item({ value }) {
  const { removeFromCart } = useContext(CartContext);
  const image = `react-ecommerce/img/${value.imgUrl}`

  return (
    <CartItem>
      <Flex dir="row">
        <ItemImg src={image} alt=""></ItemImg>
        <Flex dir={"column"} align={"flex-end"}>
          <Flex dir={"row"} align={"flex-start"} justify={"space-between"}>
            <ItemTitle>{value.title}</ItemTitle>
            <DeleteIcon>
              <IoMdRemoveCircleOutline
                onClick={() => removeFromCart(value.id)}
              />
            </DeleteIcon>
          </Flex>
          <p className="item-price">R${value.price}</p>
        </Flex>
      </Flex>
      <hr/>
    </CartItem>
  );
}

export default Item;

/*<div>
<button className="item-operator-btn"  onClick={() => changeQuantity(value.id, '-')}>-</button>
<p>{value.quantity}</p>
<button className="item-operator-btn" onClick={() => changeQuantity(value.id, '+')}>+</button>
</div>*/
