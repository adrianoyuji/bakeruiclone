import { MenuProvider } from "hooks/menu";

const AppProvider: React.FC = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default AppProvider;
