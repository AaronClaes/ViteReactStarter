import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ active }) => (active ? "flex-start" : "flex-end")};
  width: 60px;
  padding: 6px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 30px;
  cursor: pointer;

  .dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.text};
  }
`;
