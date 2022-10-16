import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;
  padding: 30px;

  :hover {
    transition: all 0.5s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid transparent;

    button.play-button {
      svg {
        transition: all 0.5s ease-in-out;
        scale: 150%;
      }
    }
  }

  img {
    width: 442px;
    height: 261px;
    border-radius: 16px;
    object-fit: cover;
  }

  .title-and-tags {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 24px 0 0 0;

    h1 {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      display: flex;
      align-items: center;

      color: #ffffff;
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 10px 0 0 0;

    p {
      margin: 0;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: rgba(255, 255, 255, 0.5);
    }

    button {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      color: rgba(255, 255, 255, 0.5);

      svg {
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
