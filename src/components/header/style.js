import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(255, 217, 0);
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.342);

  > svg {
    float: right;
    width: 30px;
    height: 30px;
    margin-top: 24px;
    margin-right: 32px;
    cursor: pointer;

    &:hover {
      color: #fff;
      transition: .2s;
    }

    @media (max-width: 500px){
      margin-right: 5%;
    }
  }
`;