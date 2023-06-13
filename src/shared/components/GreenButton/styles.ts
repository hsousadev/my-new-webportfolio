import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4px;
  padding: 10px 16px;
  border-radius: 16px;
  border: 1px solid #4ae290;

  :hover {
    opacity: 50%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    p {
      font-family: "Raleway";
      font-weight: 600;
      color: #4ae290;

      margin: 0;
      line-height: 1.25;
      margin-block-start: 4px;
      margin-block-end: 0;
    }
  }

  @media (max-width: 768px) {
  }
`;
