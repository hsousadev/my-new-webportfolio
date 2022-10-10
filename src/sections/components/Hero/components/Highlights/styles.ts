import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;

  .left {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

     .name-and-title {
      h1 {
        margin: 24px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 72px;
        line-height: 85px;

        color: #ffffff;
      }

      h6 {
        margin: 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
        opacity: 50%;
      }
    }
  }

  > img {
  }

  .right {
    h2 {
      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: flex-center;
      justify-content: flex-end;

      gap: 4px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;

      text-align: center;
      text-justify: center;

      color: rgba(123, 74, 226, 0.5);

      :hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        opacity: 0.5;
      }

      svg {
        margin-top: -4px !important;
      }
    }
  }
`;
