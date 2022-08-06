import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 7.25rem 8.3125rem auto;
  grid-template-areas:
    "header"
    "title"
    "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.div`
  max-width: 71.0625rem;
  margin: 0 auto;
`;
