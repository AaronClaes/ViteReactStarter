import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
    </Wrapper>
  );
};

export default Navigation;
