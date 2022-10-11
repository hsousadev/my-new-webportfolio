import styled from "styled-components";

export const Container = styled.button`
  transition: all 0.2s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 10px 16px;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  :hover {
    transition: all 0.2s ease-out;
    border: 1px solid transparent;
    background: rgba(123, 74, 226, 0.1);
  }

  h1 {
    margin: 0;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: rgba(123, 74, 226, 0.5);
    white-space: nowrap;
  }
`;
