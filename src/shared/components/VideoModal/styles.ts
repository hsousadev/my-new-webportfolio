import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
  background: rgba(15, 15, 15, 0.1);
  display: flex;

  .video-container {
    width: 100vw;
    display: flex;
    max-width: 1338px;
    left: 0;
    align-items: flex-end;
    flex-direction: column;

    img {
      transition: all ease-in-out 0.2s;
      cursor: pointer;
      margin-bottom: 10px;
      filter: drop-shadow(1px 1px 15px rgba(0, 0, 0, 0.6));
    }

    img:hover {
      transition: all ease-in-out 0.2s;
      transform: rotate(90deg);
    }
  }

  .iframe-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }

  @media screen and (max-width: 1023px) {
    padding: 15%;
  }

  @media screen and (max-width: 540px) {
    padding: 0;

    .video-container svg {
      margin-right: 10px;
    }

    iframe {
      border-radius: 0;
    }
  }
`;
