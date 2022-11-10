import React, { useContext } from "react";
import {
  Container,
  Content,
  SideHeader,
  CartActions,
  Button,
  CartScroll,
  QuitCartIcon,
  SideHeaderIcon,
} from "./style";
import { Flex } from "../../style";
import CartItens from "../cart/CartItens";
import { CartContext } from "../../contexts/CartContext";
import { FaTimes } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  const { cart, clearCart, cartSum } = useContext(CartContext);
  const result = cartSum();

  return (
    <Container sidebar={active}>
      <SideHeader>
        <Flex dir={"row"} justify={"space-between"} align={"center"}>
          <Flex dir={"row"} align={"center"}>
            <SideHeaderIcon>
              <BsCart4 />
            </SideHeaderIcon>
            <h4>Meu carrinho</h4>
          </Flex>
          <QuitCartIcon>
            <FaTimes onClick={closeSidebar} />
          </QuitCartIcon>
        </Flex>
      </SideHeader>
      <Content>
        {cart.length > 0 ? (
          <>
            <CartScroll>
              <CartItens />
            </CartScroll>
            <CartActions>
              <h4>Total: R${result}</h4>
              <Button onClick={() => clearCart()}>Limpar carrinho</Button>
              <Button buy>Comprar</Button>
            </CartActions>
          </>
        ) : (
          <h4>Seu carrinho está vazio!</h4>
        )}
      </Content>
    </Container>
  );
}

export default Sidebar;
