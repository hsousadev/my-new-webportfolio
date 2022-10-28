import styled, { css } from "styled-components";

interface ContainerProps {
  language: string;
}

export const Container = styled.div<ContainerProps>`
  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;

  .sections {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    button {
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      font-size: 16px;

      color: white;
      opacity: 50%;
      border: 0;
      padding: 0;

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
      }
    }
  }

  .lang {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    button.language {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      outline: none;
      border: none;
      width: 56px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      display: flex;

      color: #ffffff;
      opacity: 60%;

      img {
        width: 24px;
        height: 24px;
      }

      :hover {
        transition: all 0.2s ease-in-out;
        color: var(--PURPLE);
      }
    }

    #pt {
      ${(props) =>
        props?.language === "pt" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }

    #en {
      ${(props) =>
        props?.language === "en" &&
        css`
          color: var(--PURPLE);
          opacity: 100%;
        `}
    }
  }
`;
