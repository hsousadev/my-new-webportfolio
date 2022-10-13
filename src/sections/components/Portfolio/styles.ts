import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
  margin-bottom: 100px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 100px;

    > h1 {
      margin: 24px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;

      color: #ffffff;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 32px;
    }
  }

  .cards {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
    margin-bottom: 48px;
    gap: 48px;
  }

  .see-more-projects {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    div {
      display: flex;
      gap: 16px;
    }

    a {
      :hover {
        transition: all 0.4s ease-in-out;
        opacity: 50%;
      }

      transition: all 0.4s ease-in-out;

      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      text-align: end;

      margin: 0 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: rgba(123, 74, 226, 0.5);
    }
  }

  @media (max-width: 1910px) {
    zoom: 85%;
  }

  @media (max-width: 1440px) {
    zoom: 75%;
  }

  @media (max-width: 1280px) {
    .cards {
      justify-content: center;
    }
  }

  @media (max-width: 840px) {
    .header {
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;

    .header {
      margin-bottom: 32px;
      > h1 {
        margin: 16px 0 0 0;
        font-size: 24px;
        line-height: 28px;
      }
    }

    .cards {
      justify-content: flex-start;
      flex-wrap: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      gap: 16px;
      padding-right: 64px;
      margin-bottom: 24px;
    }

    .see-more-projects {
      a {
        font-size: 14px;
        line-height: 16px;
        justify-content: flex-end;
      }

      div {
        flex-direction: column;
      }
    }
  }
`;
