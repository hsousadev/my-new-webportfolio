import { keyframes } from "styled-components";

export const pulse = keyframes`
  from {
    transform: scale(1);
  }
  
  to {
    transform: scale(1.1);
  }
`;

export const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(15%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-15%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(15%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const horizontalWalk = keyframes`
  0% {
    transform: translateX(-3%);
  }

  50% {
    transform: translateX(3%);
  }

  100% {
    transform: translateX(-3%);
  }

`;

export const invertedHorizontalWalk = keyframes`
  0% {
    transform: translateX(3%);
  }

  50% {
    transform: translateX(-3%);
  }

  100% {
    transform: translateX(3%);
  }

`;

export const shortAppearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
