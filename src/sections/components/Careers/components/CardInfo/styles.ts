import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  width: 520px;
  height: 160px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    transition: all 0.6s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
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

  .dates {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    strong {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;

      color: var(--PURPLE);
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
