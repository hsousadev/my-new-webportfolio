import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 40px;
  max-width: 1640px;

  width: 100%;

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
`;
