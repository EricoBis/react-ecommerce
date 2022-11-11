import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Card, ProductTitle } from "../style"
import { CartButton } from "../style";
import {BsCart4} from "react-icons/bs"
import {Img} from "../style";

function ProductCard({ value }) {
  const {addToCart} = useContext(CartContext);
  const url = `img/${value.imgUrl}`

  return (
    <Card>
      <Img src={url} alt=""/>
      <ProductTitle className="product-title">{value.title}</ProductTitle>
      <h3 className="produt-price">R${value.price}</h3>
      <CartButton onClick={()=> addToCart(value)}><BsCart4/></CartButton>
    </Card>
  );
}

export default ProductCard;
