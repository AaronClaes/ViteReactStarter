import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
`;
