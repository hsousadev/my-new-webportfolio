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
  }
`;
