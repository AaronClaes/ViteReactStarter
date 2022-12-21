import React from "react";
import { useMatch } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { StyledLink, Wrapper } from "./styles";

const Navigation = () => {
  return (
    <Wrapper>
      <div className="links">
        <StyledLink active={useMatch("/")} to="/">
          Home
        </StyledLink>
        <StyledLink active={useMatch("about")} to="about">
          About
        </StyledLink>
      </div>
      <ThemeToggle />
    </Wrapper>
  );
};

export default Navigation;
