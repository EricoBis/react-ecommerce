import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.342);
  text-align: center;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 320px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 320px;
    }
  }
`;

export const SideHeader = styled.div`
  width: 92%;
  border-radius: 10px 24px;
  height: 60px;
  margin: 10px;
  background-color: rgb(255, 217, 0);
`;

export const SideHeaderIcon = styled.div`
  font-size: larger;
  margin-left: 16px;
  margin-right: 8px;
`
export const QuitCartIcon = styled.div`
  font-size: 25px;
  margin-right: 16px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: rgba(255, 255, 255, 0.671);
    transition: .2s;
  }
`

export const CartActions = styled.div`
  width: 290px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.342);
  text-align: left;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  color: grey;
`;

export const Button = styled.button`
  padding: 8px;
  border: 2px solid #c0c0c0;
  color: #111111;
  border-radius: 10px;
  margin-top: 8px;
  background-color: transparent;
  font-size: large;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #111111;
  }

  ${(props) =>
    props.buy &&
    css`
      background: green;
      border: 2px solid green;
      color: white;
      padding: 16px;
    `}
`;

export const CartScroll = styled.div`
  height: 55vh;
  overflow: hidden;
  overflow-y: scroll;
`;

export const Content = styled.div`
  margin-top: 20px;
`;
