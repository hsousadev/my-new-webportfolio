import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 200px;

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
        font-size: 52px;
        line-height: 61px;

        color: #ffffff;
      }

      h6 {
        margin: 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        opacity: 50%;
      }
    }

    .social-medias {
      display: flex;
      margin-top: 24px;
      gap: 16px;

      img {
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        :hover {
          transition: all 0.4s ease-in-out;
          scale: 110%;
        }
      }
    }
  }

  > img {
    transition: all 0.8s ease-in-out;
    height: 600px;

    :hover {
      transition: all 0.8s ease-in-out;
      scale: 105%;
    }
  }

  .right {
    a {
      appearance: none;
      text-decoration: none;

      transition: all 0.2s ease-in-out;

      display: flex;
      align-items: flex-center;
      justify-content: flex-end;
      margin-bottom: 8px;
      gap: 4px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;

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
