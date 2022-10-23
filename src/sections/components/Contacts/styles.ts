import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 64px;

  margin-bottom: 140px;

  .tag-and-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 24px;

    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;
      text-align: center;
      margin: 0;

      color: #ffffff;
    }
  }

  .wpp-and-email {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    .email {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      svg {
        cursor: pointer;
        transition: all 0.6s ease-in-out;

        :hover {
          transition: all 0.6s ease-in-out;
          opacity: 50%;
        }
      }

      h4 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin: 4px 0 0 0;

        color: #7b4ae2;
      }

      h5 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        margin: 4px 0 16px 0;
      }
    }
  }

  h3 {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: rgba(123, 74, 226, 0.5);

    gap: 8px;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 768px) {
    zoom: 100%;
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 24px;

    .tag-and-title {
      align-items: flex-start;

      h1 {
        font-size: 24px;
        line-height: 24px;
      }
    }

    .wpp-and-email {
      align-items: flex-start;
      flex-direction: column;

      .email {
        align-items: flex-start;

        .email-and-copy {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }
      }
    }
  }
`;
