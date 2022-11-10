import styled from "styled-components";

export const Flex = styled.div`
width: 100%;
  display: flex;
  flex-direction: ${(props) => props.dir};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export const CardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Card = styled.div`
  width: 20%;
  min-width: 300px;
  margin: 15px;
  box-sizing: border-box;
  float: left;
  text-align: left;
  border-radius: 20px;
  cursor: pointer;
  padding: 20px 10px 10px 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.4s;
  background: #fff;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0px, -8px);
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 45%;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 280px;
  text-align: center;
  margin: 0 auto;
  display: block;
`;

export const ProductTitle = styled.p`
  font-size: 18px;
`

export const CartButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 20px;
  border: 2px solid rgb(255, 217, 0);
  cursor: pointer;
  background-color: rgb(255, 217, 0);
  font-size: large;

  &:hover {
    background-color: #fff;
    transition: 0.4s;
  }

  &:active {
    background-color: rgb(255, 217, 0);
  }
`;
