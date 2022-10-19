import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  padding: 14px;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  transition: all 0.6s ease-in-out;

  :hover {
    transition: all 0.6s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }
`;
