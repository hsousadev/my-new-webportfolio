import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  width: 100%;
  max-width: 1645px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    text-align: center;
    color: #ffffff;
    margin: 24px 0 100px 0;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;

    color: rgba(255, 255, 255, 0.5);
    margin: 0 0 40px 0;
  }

  .techs {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    gap: 32px;
    margin: 0 0 60px 0;
    padding-bottom: 24px;
    zoom: 90%;
  }

  @media (max-width: 1440px) {
    zoom: 80%;
  }

  @media (max-width: 798px) {
    zoom: 100%;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin: 16px 0 32px 0;
      text-align: left;
    }

    h3 {
      text-align: left;
      font-size: 14px;
    }

    .techs {
      gap: 16px;
    }
  }

  @media (max-width: 670px) {
    .techs {
      overflow-x: scroll;
      justify-content: flex-start;
      padding-right: 24px;
    }
  }

  @media (max-width: 500px) {
    .techs {
      zoom: 60%;
    }
  }
`;
