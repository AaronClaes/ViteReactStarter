import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
