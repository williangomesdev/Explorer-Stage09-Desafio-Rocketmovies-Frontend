import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
  }
`;

export const Content = styled.div`
  max-width: 71.0625rem;
  margin: 0 auto;
`;
