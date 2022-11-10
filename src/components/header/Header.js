import React, { useState } from "react";
import { Container } from "./style";
import { BsCart4, BsPersonCircle } from "react-icons/bs";
import { BiBox } from "react-icons/bi";
import Sidebar from "../sidebar/Sidebar";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <BsCart4 onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar} />}
      <BiBox />
      <BsPersonCircle />
    </Container>
  );
}

export default Header;
