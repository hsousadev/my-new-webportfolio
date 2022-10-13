import styled, { css } from "styled-components";

interface ContainerProps {
  area: string;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 20px 30px 20px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  width: 246px;
  height: 200px;

  ${(props) =>
    props.area === "Trabalhos" &&
    css`
      background-color: rgba(123, 74, 226, 0.1);
      border: 1px solid transparent;
    `}

  :hover {
    transition: all 0.5s ease-in-out;
    background-color: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;
  }

  h5 {
    margin: 8px 0 0 0;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }

  h1 {
    margin: 0;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
  }
`;
