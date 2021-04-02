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
  showFixedHeader: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu(): void;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export const LayoutProvider: React.FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [showFixedHeader, setShowFixedHeader] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const screenRef = useRef<null | HTMLElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }

    function udpateScrollPosition() {
      if (window.scrollY > 60) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    }

    window.addEventListener("scroll", udpateScrollPosition);
    window.addEventListener("resize", updateSize);

    updateSize();
    udpateScrollPosition();
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("scroll", udpateScrollPosition);
    };
  }, []);

  const scrollTop = () => {
    const screeNode = screenRef.current;
    screeNode?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <LayoutContext.Provider
      value={{
        windowWidth,
        windowHeight,
        screenRef,
        scrollTop,
        showFixedHeader,
        toggleMobileMenu,
        isMobileMenuOpen,
      }}
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
