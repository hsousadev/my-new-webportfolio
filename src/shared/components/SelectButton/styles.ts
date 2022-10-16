import styled from "styled-components";

export const Container = styled.button`
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 12px 16px;
  width: 184px;
  gap: 16px;

  :hover {
    transition: all 0.4s ease-in-out;
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  :focus {
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  img {
    height: 40px;
  }

  h1 {
    margin: 0;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    color: rgba(123, 74, 226, 0.5);
  }

  @media (max-width: 768px) {
    width: 116px;
    height: 40px;

    border: 1px solid rgba(123, 74, 226, 0.5);
    border-radius: 8px;

    img {
      height: 24px;
    }

    h1 {
      font-size: 14px;
    }
  }
`;
