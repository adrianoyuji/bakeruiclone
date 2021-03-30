import { MenuProvider } from "hooks/menu";
import { LayoutProvider } from "hooks/layout";

const AppProvider: React.FC = ({ children }) => {
  return (
    <LayoutProvider>
      <MenuProvider>{children}</MenuProvider>
    </LayoutProvider>
  );
};

export default AppProvider;
