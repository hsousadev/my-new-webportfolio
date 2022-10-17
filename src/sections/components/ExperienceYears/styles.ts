import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 140px 0px;
  padding: 100px 0;

  border-top: 1px solid rgba(123, 74, 226, 0.2);
  border-bottom: 1px solid rgba(123, 74, 226, 0.2);

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 32px;
  }

  .descriptions {
    transition: all 0.5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;

    background: rgba(123, 74, 226, 0.1);
    border-radius: 16px;
    padding: 28px 20px;
    width: 898px;
    gap: 120px;

    div {
      width: 206px;

      h5 {
        margin: 0;
        text-align: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #7b4ae2;
      }

      h1 {
        margin: 0;
        text-align: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: #7b4ae2;
      }
    }
  }

  @media (max-width: 1040px) {
    zoom: 90%;
  }

  @media (max-width: 960px) {
    .cards {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    margin: 80px 0px;
    padding: 80px 0px;

    .cards {
      zoom: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 340px) {
    zoom: 80%;
  }
`;
