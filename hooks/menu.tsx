import Category from "interfaces/Category";
import React, { createContext, useContext, useState, useEffect } from "react";
import api from "services/api";

interface MenuContextData {
  menu: Category[];
  loading: Boolean;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider: React.FC = ({ children }) => {
  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const { data } = await api.get("api/menu");
      setMenu(data.menu);
    } catch (error) {
      alert("error while fetching data");
      location.reload(); // refreshes page
    }
    setLoading(false);
  };

  return (
    <MenuContext.Provider value={{ menu, loading }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  return context;
};
MenuContext;

export default { useMenu, MenuProvider };
