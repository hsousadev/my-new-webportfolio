import styled, { css } from "styled-components";

interface ContainerProps {
  status?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  width: 520px;
  border-radius: 16px;
  transition: all 0.6s ease-in-out;

  ${(props) =>
    props.status
      ? css`
          cursor: pointer;
          border: 2px solid #4ae290;
          background: rgba(74, 226, 144, 0.1);
        `
      : css`
          border: 1px solid rgba(123, 74, 226, 0.5);
          :hover {
            background: rgba(123, 74, 226, 0.1);
          }
        `}

  :hover {
    transition: all 0.6s ease-in-out;
    border: 1px solid transparent;
  }

  .title-and-description {
    width: 100%;

    h4 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      display: flex;
      align-items: center;
      color: #ffffff;
      margin: 0 0 8px 0;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      color: rgba(255, 255, 255, 0.5);
    }
  }

  .tags {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    margin-top: 4px;
    margin-bottom: 64px;
    width: 100%;
    flex-wrap: wrap;
  }

  .dates {
    ${(props) =>
      props.status
        ? css`
            h5 {
              display: flex;
              gap: 0.5rem;
              color: #4ae290 !important;
            }
            strong {
              color: #4ae290;
            }
          `
        : css`
            strong {
              color: var(--PURPLE);
            }
          `}

    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: flex-end;

    strong {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
    }

    h5 {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: right;

      color: var(--PURPLE);
    }
  }

  @media (max-width: 1440px) {
    .title-and-description {
      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    padding: 16px;

    .title-and-description {
      h4 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }

    .dates {
      strong,
      h5 {
        font-size: 12px;
      }
    }
  }
`;
