import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 1280px) {
    zoom: 70%;
    padding: 0 100px;
  }

  @media (max-width: 880px) {
    padding: 0 80px;
    zoom: 60%;
  }

  @media (max-width: 768px) {
    padding: 0 48px;
    zoom: 100%;
  }
`;
