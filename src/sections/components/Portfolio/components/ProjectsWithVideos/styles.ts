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
    justify-content: flex-start;
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
  }

  @media (min-width: 768px) {
    .video-cards {
      /* width */
      ::-webkit-scrollbar {
        height: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: rgba(123, 74, 226, 0.1);
        border-radius: 16px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: rgba(123, 74, 226, 0.5);
        border-radius: 16px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(123, 74, 226, 0.5);
      }
    }
  }

  @media (max-width: 768px) {
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
