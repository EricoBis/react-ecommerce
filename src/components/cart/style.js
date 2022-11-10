import styled from "styled-components";

export const CartItem = styled.li`
  list-style-type: none;
  padding: 8px 16px;
`;

export const ItemTitle = styled.h4`
  color: grey;
  font-size: small;
  margin: 0 5px 0;
`;

export const CartList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: red;

  &:hover {
    color: gray;
  }
`;
