import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 39.375rem;
  input {
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    border: none;
    border-radius: 0.625rem;

    width: 100%;
    height: 3.5rem;
    padding: 19px 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
