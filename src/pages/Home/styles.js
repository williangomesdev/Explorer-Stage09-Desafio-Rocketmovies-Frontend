import styled from "styled-components";

export const Container = styled.div`
  .mainTitle {
    margin-top: 3.125rem;
    margin-inline: auto;
    width: 100%;
    max-width: 71.0625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.625rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      background: ${({ theme }) => theme.COLORS.ROSE};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      padding-block: 0.8438rem;
      padding-inline: 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      line-height: 1.3125rem;

      svg{
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
