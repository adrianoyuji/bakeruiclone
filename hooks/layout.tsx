import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useRef,
} from "react";

interface LayoutContextData {
  windowWidth: number;
  windowHeight: number;
  screenRef: any;
  scrollTop(): void;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export const LayoutProvider: React.FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const screenRef = useRef<null | HTMLElement>(null);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scrollTop = () => {
    const screeNode = screenRef.current;
    screeNode?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <LayoutContext.Provider
      value={{ windowWidth, windowHeight, screenRef, scrollTop }}
    >
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
