import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > main {
    max-width: 1137px;
    text-align: justify;
    margin-top: 2.5rem;
    margin-inline: auto;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 0.625rem;
      margin-bottom: 1.5rem;

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.25rem;
      margin-bottom: 1.5rem;

      > div {
        display: flex;
        flex-direction: row;
        gap: 0.7031rem;
        > svg {
          color: ${({ theme }) => theme.COLORS.ROSE};
        }
      }
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }

    > div:nth-child(4) {
      margin-block: 2.5rem;
    }
  }
`;
