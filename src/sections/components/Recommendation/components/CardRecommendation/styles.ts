import styled from "styled-components";

export const Container = styled.div`
  width: 440px;
  height: 280px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  .comment {
    p {
      margin: 12px 0 12px 0;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: rgba(255, 255, 255, 0.5);
    }
  }

  .author-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 100px;
    }

    .name-and-position {
      h1 {
        margin: 0 0 4px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #ffffff;
      }

      h3 {
        margin: 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;

        color: rgba(123, 74, 226, 0.5);
      }
    }
  }
`;
