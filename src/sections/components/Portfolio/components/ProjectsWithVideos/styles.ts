import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start !important;
    flex-direction: column;
    margin-bottom: 53px;

    h1 {
      margin: 0;
    }

    h4 {
      margin: 8px 0 0 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #fff;
      opacity: 50%;
    }
  }

  .video-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 54px;
    overflow-x: scroll;
    padding-bottom: 24px;
    zoom: 90%;

    .content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      padding-bottom: 24px;
    }
  }

  .alice-carousel {
    zoom: 90%;
    cursor: pointer;

    .alice-carousel__wrapper {
      overflow: visible;
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
    top: -40%;
    left: 90%;
  }

  .alice-carousel__next-btn {
    position: absolute;
    top: -40%;
    left: 95%;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--PURPLE);
  }

  @media (max-width: 1440px) {
    /* zoom: 80%; */
  }

  @media (max-width: 1366px) {
    .alice-carousel__stage {
      gap: 56px;
    }

    .alice-carousel__next-btn {
      left: 95%;
    }

    .alice-carousel__prev-btn {
      left: 91%;
    }
  }

  @media (max-width: 1300px) {
    .alice-carousel__next-btn {
      left: 96%;
    }
  }

  @media (max-width: 1090px) {
    .alice-carousel__next-btn {
      left: 98%;
    }
  }

  @media (max-width: 830px) {
    .alice-carousel__next-btn {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    zoom: 100%;
    margin-top: 80px;

    .video-cards {
      gap: 16px;
      padding-right: 64px;
    }

    .header {
      gap: 8px !important;

      h4 {
        margin: 0;
      }
    }
  }

  @media (max-width: 500px) {
    .video-cards {
      zoom: 70%;
    }
  }

  @media (max-width: 355px) {
    .video-cards {
      zoom: 60%;
    }
  }
`;
