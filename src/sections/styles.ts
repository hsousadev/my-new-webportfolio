import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1910px) {
    padding: 0 140px;
    zoom: 85%;
  }

  @media (max-width: 768px) {
    padding: 0 48px;
  }

  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;
