import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;
  margin: 0;

  width: fit-content;
  height: 45px;
  background: rgba(123, 74, 226, 0.1);
  border-radius: 16px;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: var(--PURPLE);

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
    height: 100%;
    border-radius: 8px;
  }
`;
