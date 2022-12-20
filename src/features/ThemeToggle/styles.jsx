import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  padding: 1rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.values.borderRadius};

  .toggle_card-title {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }
`;
