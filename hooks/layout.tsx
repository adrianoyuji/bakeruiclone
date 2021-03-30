import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";

interface LayoutContextData {
  windowWidth: number;
  windowHeight: number;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export const LayoutProvider: React.FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <LayoutContext.Provider value={{ windowWidth, windowHeight }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  return context;
};
LayoutContext;

export default { useLayout, LayoutProvider };
