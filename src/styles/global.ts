import styled from "styled-components";

export const Container = styled.div`
  --PURPLE: #7b4ae2;
  --DARK: #090e16;

  background-color: var(--DARK);
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  button {
    cursor: pointer;
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
  }
`;
