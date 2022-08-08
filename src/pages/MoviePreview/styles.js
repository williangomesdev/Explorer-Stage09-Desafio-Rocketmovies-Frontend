import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > main {
    max-width: 1137px;
    margin-top: 2.5rem;
    margin-inline: auto;

    > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 0.625rem;

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }
  }
`;
