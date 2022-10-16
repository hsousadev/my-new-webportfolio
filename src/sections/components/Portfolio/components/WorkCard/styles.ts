import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  width: 360px;
  height: 460px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  border-radius: 16px;

  :hover {
    transition: all 0.4s ease-in-out;
    background: rgba(123, 74, 226, 0.1);
    border: 1px solid rgba(123, 74, 226, 0.1);
  }

  .content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    padding: 30px;
    height: 100%;

    .info {
      h5 {
        margin: 0 0 8px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;

        color: #ffffff;
      }

      p {
        margin: 0 0 16px 0;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: #ffffff;
        opacity: 50%;
      }
    }

    .tags-and-banner {
      .tags {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 8px;
        margin-bottom: 24px;
        width: 100%;
        flex-wrap: wrap;
      }

      img {
        width: 300px;
        height: 200px;
        border-radius: 8px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 370px;

    .content {
      padding: 24px;

      .info {
        h5 {
          font-size: 16px;
          line-height: 19px;
        }

        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0 0 8px 0;
        }
      }

      .tags-and-banner {
        .tags {
          margin-bottom: 16px;
        }

        img {
          width: 252px;
          height: 160px;
        }
      }
    }
  }
`;
