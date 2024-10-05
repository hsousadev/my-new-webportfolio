import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1640px;
  margin-bottom: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .profile-pic {
    border-radius: 100%;
  }

  .description {
    width: 926px;

    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 56px;

      color: #ffffff;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;

      color: #ffffff;
      opacity: 50%;
    }
  }

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 1280px) {
    flex-direction: column;

    .description {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 0 48px;
    zoom: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 80px;

    .description {
      width: 100%;
      margin-top: 32px;

      h1 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 28px;

        color: #ffffff;
      }

      p {
        margin: 32px 0 0 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        /* or 179% */
      }
    }
  }
`;
