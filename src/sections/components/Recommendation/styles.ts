import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1640px;
  margin-bottom: 140px;
  transition: all 0.6s ease-in-out;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;
    margin-bottom: 64px;

    h1 {
      margin: 24px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 42px;

      color: #ffffff;
    }
  }

  .alice-carousel__stage {
    transition: all 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 64px;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: auto;
  }

  .alice-carousel__prev-btn {
    position: absolute;
    top: -35%;
    left: 90%;
  }

  .alice-carousel__next-btn {
    position: absolute;
    top: -35%;
    left: 95%;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--PURPLE);
  }
`;
