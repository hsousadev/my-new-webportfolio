import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 40px;
  width: 100vw;

  background-color: var(--DARK);
  z-index: 10;

  position: absolute;
  top: 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 90%;
    padding: 12px 24px;

    background: rgba(123, 74, 226, 0.15);
    border-radius: 16px;

    > img {
      width: 32px;
      height: 32px;
    }

    .social-medias {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 16px;
    }
  }
`;
