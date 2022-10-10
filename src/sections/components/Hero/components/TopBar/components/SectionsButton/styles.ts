import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 24px;

  button {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 18px;

    color: white;
    opacity: 50%;
    border: 0;
    padding: 0;

    :hover {
      transition: all 0.2s ease-in-out;
      color: var(--PURPLE);
    }
  }
`;
