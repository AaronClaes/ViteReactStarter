import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .links {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, active }) => theme.colors[active ? "white" : "gray"]};
`;
