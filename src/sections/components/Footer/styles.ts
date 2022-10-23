import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(123, 74, 226, 0.1);

  width: 100vw;
  height: 60px;
  padding: 24px;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.5);
  }

  .social-medias {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (max-width: 525px) {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
`;
