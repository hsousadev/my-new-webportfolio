import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 1640px;
  width: 100%;

  @media (max-width: 1150px) {
    zoom: 90%;
  }

  @media (max-width: 1045px) {
    zoom: 80%;
  }

  @media (max-width: 960px) {
    zoom: 100%;
  }
`;
