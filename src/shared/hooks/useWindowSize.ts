import { useState, useEffect } from "react";

interface IUseWindowSizeReturnedValues {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = (): IUseWindowSizeReturnedValues => {
  const [windowSize, setWindowSize] = useState<any>({
    windowWidth: undefined,
    windowHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
