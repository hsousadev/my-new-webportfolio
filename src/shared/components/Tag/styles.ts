import styled, { css } from "styled-components";

interface ContainerProps {
  online?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 5px 8px;
  width: fit-content;

  border-radius: 8px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;

  ${(props) =>
    props?.online
      ? css`
          color: #4ae290;
          background: rgba(74, 226, 144, 0.3);
        `
      : css`
          color: #7b4ae2;
          background: rgba(123, 74, 226, 0.1);
        `};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
