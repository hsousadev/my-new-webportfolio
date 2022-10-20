import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 1645px;
  margin: 140px 0px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin: 24px 0 0 0;

    color: #ffffff;
  }

  .columns {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 64px;
    margin: 64px 0 0 0;

    .column {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        text-align: center;
        color: #ffffff;
        margin: 0 0 8px 0;
      }

      h3 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0 0 64px 0;

        color: rgba(255, 255, 255, 0.5);
      }

      .content {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

        .cards {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;

          @media (min-width: 1080px) {
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 1080px) {
    .columns {
      flex-direction: column;

      .column {
        align-items: flex-start;

        .content {
          justify-content: flex-start;
          overflow-x: scroll;

          .cards {
            padding-bottom: 24px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    align-items: flex-start;
    margin: 0px 0px 80px 0;

    > h1 {
      font-size: 24px;
      text-align: left;
      width: 100%;
      line-height: 28px;
    }

    .columns {
      gap: 24px;
      margin-top: 24px;

      .column {
        h1 {
          font-size: 16px;
          line-height: 20px;
          margin: 8px 0 0 0;
        }
        h3 {
          font-size: 12px;
          margin: 0 0 24px 0;
        }

        .content {
          .cards {
            gap: 16px;
          }
        }
      }
    }
  }
`;
