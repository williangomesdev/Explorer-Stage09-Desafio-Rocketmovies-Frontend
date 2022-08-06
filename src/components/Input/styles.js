import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border-radius: 0.625rem;

  width: 100%;
  height: 3.5rem;

  padding: 19px 24px;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
